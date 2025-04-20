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
import { signIn } from 'next-auth/react';

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            if (result?.error) {
                setError('Invalid email or password');
                setIsLoading(false);
                
return;
            }

            router.push('/dashboard');
            router.refresh();
        } catch (error) {
            setError('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center px-4 py-12'>
            <Card className='w-full max-w-md'>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl font-bold'>Sign in</CardTitle>
                    <CardDescription>Enter your email and password to sign in to your account</CardDescription>
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
                            <div className='flex items-center justify-between'>
                                <Label htmlFor='password'>Password</Label>
                                <Link href='/forgot-password' className='text-primary text-sm hover:underline'>
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex flex-col'>
                    <div className='mt-2 text-center text-sm'>
                        Don&apos;t have an account?{' '}
                        <Link href='/sign-up' className='text-primary hover:underline'>
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
