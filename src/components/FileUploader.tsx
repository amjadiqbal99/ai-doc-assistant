import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const FileUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const mutation = useMutation((file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        return axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }, {
        onSuccess: () => {
            setFile(null);
            alert('File uploaded successfully!');
        },
        onError: (error: any) => {
            setError(error.response?.data?.message || 'File upload failed.');
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
        }
    };

    const handleUpload = () => {
        if (file) {
            mutation.mutate(file);
        } else {
            setError('Please select a file to upload.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="file"
                accept=".pdf,.md,.doc,.docx"
                onChange={handleFileChange}
                className="mb-4"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Upload
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default FileUploader;