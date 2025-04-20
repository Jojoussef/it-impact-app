'use client';

import { redirect } from 'next/navigation';

import HomePage from './(public)/HomePage';
import { useSession } from 'next-auth/react';

export default function Home() {
    // Get session status
    const { data: session, status } = useSession();

    // If user is authenticated, redirect to dashboard
    if (status === 'authenticated') {
        redirect('/dashboard');
    }

    // If not authenticated or loading, show home page
    return (
        <>
            <HomePage />
        </>
    );
}
