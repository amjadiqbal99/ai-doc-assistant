import { NextResponse } from 'next/server';
import { validateFile } from '@/utils/fileValidation';
import { uploadToVectorStore } from '@/lib/langchain/vectorStore';

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !validateFile(file)) {
        return NextResponse.json({ error: 'Invalid file type or size.' }, { status: 400 });
    }

    try {
        const fileBuffer = await file.arrayBuffer();
        const embeddings = await uploadToVectorStore(fileBuffer);

        return NextResponse.json({ message: 'File uploaded successfully.', embeddings }, { status: 200 });
    } catch (error) {
        console.error('File upload error:', error);
        return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
    }
}