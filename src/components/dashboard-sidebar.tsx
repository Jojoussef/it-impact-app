'use client';

import { Logo } from '@/app/(public)/HomePage';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { get } from '@/utils/lodash';

import { ChevronLeft, ChevronRight, File, LayoutDashboard, LogOut, RefreshCcw, Settings } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

interface DashboardSidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    activeItem: string;
    setActiveItem: (item: string) => void;
}

export function DashboardSidebar({ collapsed, setCollapsed, activeItem, setActiveItem }: DashboardSidebarProps) {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'submit-doc', label: 'Submit Claim', icon: File },
        { id: 'refund', label: 'Refund Request', icon: RefreshCcw },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const { data: session, update: updateSession, status } = useSession();

    return (
        <div
            className={`relative flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${
                collapsed ? 'w-20' : 'w-64'
            }`}>
            {/* Toggle button */}
            <Button
                variant='ghost'
                size='icon'
                className='absolute top-6 -right-2 z-10 h-6 w-6 rounded-full border border-gray-200 bg-white shadow-sm'
                onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <ChevronRight className='h-4 w-4' /> : <ChevronLeft className='h-4 w-4' />}
            </Button>

            {/* Logo */}
            <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} h-16 px-4`}>
                <div className='flex items-center gap-2'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-md'>
                        <Logo size={collapsed ? 25 : 30} />
                    </div>
                    {!collapsed && <span className='text-lg font-semibold'>Seha</span>}
                </div>
            </div>

            <Separator />

            {/* User profile */}
            <div className={`flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-4`}>
                <Avatar className='h-10 w-10'>
                    <AvatarImage src={get(session, 'user.image', '')} alt='User' />
                    <AvatarFallback style={{ backgroundColor: '#04C7FE' }}>
                        {get(session, 'user.name', '').charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                {!collapsed && (
                    <div className='ml-3'>
                        <p className='text-sm font-medium'>{get(session, 'user.name', 'User')}</p>
                    </div>
                )}
            </div>

            <Separator />

            {/* Navigation */}
            <nav className='flex-1 py-4'>
                <ul className='space-y-1 px-2'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`flex items-center ${
                                    collapsed ? 'justify-center' : 'justify-start'
                                } w-full rounded-md px-3 py-2 text-sm transition-colors ${
                                    activeItem === item.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveItem(item.id)}
                                style={{
                                    color: activeItem === item.id ? '#174EAB' : undefined,
                                    backgroundColor: activeItem === item.id ? 'rgba(23, 78, 171, 0.1)' : undefined
                                }}>
                                <item.icon className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
                                {!collapsed && <span>{item.label}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logout button */}
            <div className='p-4'>
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className={`flex items-center ${
                        collapsed ? 'justify-center' : 'justify-start'
                    } w-full rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100`}>
                    <LogOut className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
}
