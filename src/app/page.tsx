'use client';

import HomePage from './(public)/HomePage';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <p>Welcome, {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            <HomePage />
        </>
    );
}
