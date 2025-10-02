import { describe, it, expect, beforeEach } from 'vitest';
import { PineconeClient } from '@pinecone-database/pinecone';
import { createVectorStore, addDocument, searchDocuments } from '../../src/lib/langchain/vectorStore';

const mockPineconeClient = {
  upsert: jest.fn(),
  query: jest.fn(),
};

const mockDocument = {
  id: '1',
  content: 'This is a test document.',
};

describe('Vector Store', () => {
  let vectorStore;

  beforeEach(() => {
    vectorStore = createVectorStore(mockPineconeClient);
  });

  it('should add a document to the vector store', async () => {
    await vectorStore.addDocument(mockDocument);
    expect(mockPineconeClient.upsert).toHaveBeenCalledWith({
      vectors: [{ id: mockDocument.id, values: expect.any(Array) }],
    });
  });

  it('should search for documents in the vector store', async () => {
    const query = 'test';
    const expectedResults = [{ id: '1', score: 0.9 }];
    mockPineconeClient.query.mockResolvedValueOnce(expectedResults);

    const results = await vectorStore.searchDocuments(query);
    expect(results).toEqual(expectedResults);
    expect(mockPineconeClient.query).toHaveBeenCalledWith({
      vector: expect.any(Array),
      topK: 5,
      includeMetadata: true,
    });
  });
});