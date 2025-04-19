'use client';

import type React from 'react';
import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { submitFilledFormImage } from '@/utils/api';

import { Camera, Check, FileUp, Upload, X } from 'lucide-react';

// Document types that need to be photographed
const REQUIRED_DOCUMENTS = [
    { id: 1, name: 'Filled CNAM Form', description: 'CNAM refund form filled from your doctor or pharmacist' }
];

export default function DocumentUploadPage() {
    const [documents, setDocuments] = useState<{ [key: number]: string | null }>({});
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Check if all documents are uploaded
    const allDocumentsUploaded = REQUIRED_DOCUMENTS.every((doc) => documents[doc.id]);

    // Handle file selection
    const handleFileSelect = (docId: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target?.result) {
                    setDocuments((prev) => ({
                        ...prev,
                        [docId]: event.target?.result as string
                    }));
                }
            };

            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!allDocumentsUploaded) {
            setStatus('error');
            setErrorMessage('Please upload all required documents');
            return;
        }

        setSubmitting(true);
        setStatus('idle');

        try {
            console.log('Submitting documents:', documents[1]);
            //await submitFilledFormImage(documents[0]); // Assuming the filled form is the only document to submit
            // Randomly succeed or fail for demo purposes
            if (Math.random() > 0.5) {
                setStatus('success');
            } else {
                throw new Error('Some documents were not clear enough. Please retake them.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='container max-w-3xl py-10'>
            <h1 className='mb-6 text-center text-3xl font-bold'>Document Verification</h1>
            <p className='text-muted-foreground mb-8 text-center'>
                Please take clear photos of the following documents. Ensure good lighting and that all text is legible.
            </p>

            {/* Document upload cards */}
            <div className='mb-8 space-y-6'>
                {REQUIRED_DOCUMENTS.map((doc) => (
                    <Card
                        key={doc.id}
                        className={cn(
                            'transition-all',
                            documents[doc.id] ? 'border-green-500 dark:border-green-700' : ''
                        )}>
                        <CardHeader>
                            <div className='flex items-center justify-between'>
                                <CardTitle>{doc.name}</CardTitle>
                                {documents[doc.id] && (
                                    <div className='rounded-full bg-green-100 p-1 text-green-700 dark:bg-green-900 dark:text-green-300'>
                                        <Check className='h-5 w-5' />
                                    </div>
                                )}
                            </div>
                            <CardDescription>{doc.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {documents[doc.id] ? (
                                <div className='relative h-48 w-full overflow-hidden rounded-md'>
                                    <Image
                                        src={(documents[doc.id] as string) || '/placeholder.svg'}
                                        alt={`Uploaded ${doc.name}`}
                                        fill
                                        className='object-contain'
                                    />
                                    <Button
                                        variant='destructive'
                                        size='icon'
                                        className='absolute top-2 right-2 h-8 w-8'
                                        onClick={() => setDocuments((prev) => ({ ...prev, [doc.id]: null }))}>
                                        <X className='h-4 w-4' />
                                    </Button>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-4'>
                                    <div className='bg-muted/50 rounded-md border-2 border-dashed p-8 text-center'>
                                        <p className='text-muted-foreground mb-4'>
                                            Take a clear photo or upload an image
                                        </p>
                                        <div className='flex justify-center gap-4'>
                                            <label htmlFor={`file-${doc.id}`} className='cursor-pointer'>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <div className='bg-primary/10 rounded-full p-3'>
                                                        <FileUp className='text-primary h-6 w-6' />
                                                    </div>
                                                    <span className='text-sm font-medium'>Upload</span>
                                                </div>
                                                <input
                                                    type='file'
                                                    id={`file-${doc.id}`}
                                                    accept='image/*'
                                                    className='hidden'
                                                    onChange={(e) => handleFileSelect(doc.id, e)}
                                                />
                                            </label>

                                            <label htmlFor={`camera-${doc.id}`} className='cursor-pointer'>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <div className='bg-primary/10 rounded-full p-3'>
                                                        <Camera className='text-primary h-6 w-6' />
                                                    </div>
                                                    <span className='text-sm font-medium'>Camera</span>
                                                </div>
                                                <input
                                                    type='file'
                                                    id={`camera-${doc.id}`}
                                                    accept='image/*'
                                                    capture='environment'
                                                    className='hidden'
                                                    onChange={(e) => handleFileSelect(doc.id, e)}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='text-muted-foreground text-sm'>
                                        <h4 className='mb-2 font-medium'>Tips for a good photo:</h4>
                                        <ul className='list-disc space-y-1 pl-5'>
                                            <li>Use good lighting</li>
                                            <li>Ensure all text is clearly visible</li>
                                            <li>Include the entire document in the frame</li>
                                            <li>Avoid glare or shadows</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Status messages */}
            {status === 'success' && (
                <div className='mb-6 flex items-center gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300'>
                    <Check className='h-5 w-5 flex-shrink-0' />
                    <p>All documents have been successfully verified!</p>
                </div>
            )}

            {status === 'error' && (
                <div className='mb-6 flex items-center gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300'>
                    <X className='h-5 w-5 flex-shrink-0' />
                    <p>{errorMessage}</p>
                </div>
            )}

            {/* Submit button */}
            <Button
                className='w-full py-6 text-lg'
                onClick={handleSubmit}
                disabled={!allDocumentsUploaded || submitting}>
                {submitting ? (
                    <>
                        <svg
                            className='mr-3 -ml-1 h-5 w-5 animate-spin text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'>
                            <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'></circle>
                            <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    <>
                        <Upload className='mr-2 h-5 w-5' />
                        Submit Documents
                    </>
                )}
            </Button>

            <p className='text-muted-foreground mt-4 text-center text-sm'>
                Your documents are encrypted and securely stored according to our privacy policy.
            </p>
        </div>
    );
}
