'use client';

import type React from 'react';
import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { AlertCircle, Loader2 } from 'lucide-react';

// In a real application, this would be an API call to your backend
async function registerUser(userData: { name: string; email: string; password: string }) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock successful registration
            resolve({ success: true });
        }, 1000);
    });
}

export default function SignUp() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            
return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            
return;
        }

        setIsLoading(true);

        try {
            // Register the user
            await registerUser({ name, email, password });

            // Redirect to sign in page after successful registration
            router.push('?registered=true');
        } catch (error) {
            setError('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center px-4 py-12'>
            <Card className='w-full max-w-md'>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl font-bold'>Create an account</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant='destructive' className='mb-4'>
                            <AlertCircle className='h-4 w-4' />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='name'>Full Name</Label>
                            <Input
                                id='name'
                                placeholder='John Doe'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='name@example.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='confirm-password'>Confirm Password</Label>
                            <Input
                                id='confirm-password'
                                type='password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Creating account...
                                </>
                            ) : (
                                'Sign Up'
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex flex-col'>
                    <div className='mt-2 text-center text-sm'>
                        Already have an account?{' '}
                        <Link href='/auth/sign-in' className='text-primary hover:underline'>
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
