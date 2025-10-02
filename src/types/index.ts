// src/types/index.ts

export interface FileUpload {
    id: string;
    name: string;
    size: number;
    type: string;
    createdAt: Date;
}

export interface ChatMessage {
    id: string;
    userId: string;
    content: string;
    timestamp: Date;
}

export interface SearchResult {
    id: string;
    title: string;
    snippet: string;
    score: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface DocumentEmbedding {
    id: string;
    embedding: number[];
    metadata: Record<string, any>;
}