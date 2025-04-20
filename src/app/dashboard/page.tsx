'use client';

import { useEffect, useState } from 'react';

import { redirect } from 'next/navigation';

import { DashboardContent } from '@/components/dashboard-content';
import { DashboardSidebar } from '@/components/dashboard-sidebar';

import { useSession } from 'next-auth/react';

export default function Dashboard() {
    const { status } = useSession();
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    useEffect(() => {
        if (status === 'unauthenticated') {
            redirect('/');
        }
    }, [status]);

    // Show loading state while checking authentication
    if (status === 'loading') {
        return <div className='flex h-screen items-center justify-center'>Loading...</div>;
    }

    return (
        <div className='flex h-screen bg-gray-50'>
            <DashboardSidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <DashboardContent collapsed={collapsed} activeItem={activeItem} />
        </div>
    );
}
