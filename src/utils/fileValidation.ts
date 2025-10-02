import { extname } from 'path';

const VALID_MIME_TYPES = [
    'application/pdf',
    'text/markdown',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export const validateFile = (file: File): boolean => {
    const isValidMimeType = VALID_MIME_TYPES.includes(file.type);
    const isValidSize = file.size <= MAX_FILE_SIZE;

    return isValidMimeType && isValidSize;
};

export const getFileExtension = (fileName: string): string => {
    return extname(fileName).toLowerCase();
};