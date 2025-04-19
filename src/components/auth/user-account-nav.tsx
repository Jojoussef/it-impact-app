'use client';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

interface UserAccountNavProps {
    user: User;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
    return (
        <div className='flex items-center gap-2'>
            <Avatar>
                <AvatarImage src={user.image || ''} alt={user.name || 'User'} />
                <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
                <span className='font-medium'>{user.name}</span>
                <button onClick={() => signOut()} className='text-sm text-gray-500 hover:text-gray-700'>
                    Sign out
                </button>
            </div>
        </div>
    );
}
