import { NextResponse } from 'next/server';
import { OpenAI } from 'langchain/openai';
import { ChatMemory } from 'langchain/memory';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatMemory = new ChatMemory();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Validate incoming message
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid message format' }, { status: 400 });
    }

    // Store message in memory
    chatMemory.addMessage(message);

    // Generate response using OpenAI
    const response = await openai.chat({
      messages: chatMemory.getMessages(),
    });

    // Return the response
    return NextResponse.json({ response: response.text });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}