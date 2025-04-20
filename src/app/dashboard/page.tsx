'use client';

import { useState } from 'react';

import { DashboardContent } from '@/components/dashboard-content';
import { DashboardSidebar } from '@/components/dashboard-sidebar';

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

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
