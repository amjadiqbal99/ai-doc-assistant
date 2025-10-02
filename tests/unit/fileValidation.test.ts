import { describe, it, expect } from 'vitest';
import { validateFile } from '../../src/utils/fileValidation';

describe('File Validation Utility', () => {
    it('should validate PDF files correctly', () => {
        const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' });
        const result = validateFile(file);
        expect(result).toBe(true);
    });

    it('should validate Markdown files correctly', () => {
        const file = new File(['# Test'], 'test.md', { type: 'text/markdown' });
        const result = validateFile(file);
        expect(result).toBe(true);
    });

    it('should validate DOCX files correctly', () => {
        const file = new File(['dummy content'], 'test.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const result = validateFile(file);
        expect(result).toBe(true);
    });

    it('should reject files with invalid MIME types', () => {
        const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
        const result = validateFile(file);
        expect(result).toBe(false);
    });

    it('should reject files that are too large', () => {
        const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf', size: 10 * 1024 * 1024 + 1 }); // 10MB + 1 byte
        const result = validateFile(file);
        expect(result).toBe(false);
    });
});