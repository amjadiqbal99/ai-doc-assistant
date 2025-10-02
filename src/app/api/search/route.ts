import { NextResponse } from 'next/server';
import { PineconeClient } from '@/lib/pinecone';
import { OpenAI } from '@/lib/openai';
import { z } from 'zod';

const searchSchema = z.object({
  query: z.string().min(1, 'Query cannot be empty'),
});

export async function POST(req: Request) {
  try {
    const { query } = searchSchema.parse(await req.json());

    const pineconeClient = new PineconeClient();
    const openAIClient = new OpenAI();

    // Perform semantic search using Pinecone
    const searchResults = await pineconeClient.query(query);

    // If needed, you can enhance results with LLM
    const enhancedResults = await openAIClient.enhanceResults(searchResults);

    return NextResponse.json({ results: enhancedResults });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}