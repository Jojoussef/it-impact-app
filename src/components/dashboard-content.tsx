'use client';

import { RefundRequestContent } from '@/components/refund-request-content';
import { SettingsContent } from '@/components/settings-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import DocumentUploadPage from './doc-submission';
import { Activity, Calendar, CreditCard, DollarSign, Download, FileText, RefreshCcw, Users } from 'lucide-react';

interface DashboardContentProps {
    collapsed: boolean;
    activeItem: string;
}

export function DashboardContent({ collapsed, activeItem }: DashboardContentProps) {
    return (
        <div className={`flex-1 overflow-auto transition-all duration-300 ease-in-out`}>
            {/* Header */}
            <header className='sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6'>
                <div className='flex flex-1 items-center gap-4'>
                    <h1 className='text-xl font-semibold'>
                        {activeItem === 'dashboard' && 'Dashboard'}
                        {activeItem === 'refund' && 'Refund Requests'}
                        {activeItem === 'settings' && 'Settings'}
                    </h1>
                </div>
                <div className='flex items-center gap-4'>
                    <Button variant='outline' size='sm'>
                        <Download className='mr-2 h-4 w-4' />
                        Download Report
                    </Button>
                    <Button size='sm' style={{ backgroundColor: '#174EAB', color: 'white' }}>
                        <FileText className='mr-2 h-4 w-4' />
                        New Claim
                    </Button>
                </div>
            </header>

            {/* Main content */}
            <main className='grid flex-1 items-start gap-4 p-6'>
                {activeItem === 'dashboard' && (
                    <>
                        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Total Claims</CardTitle>
                                    <FileText className='text-muted-foreground h-4 w-4' />
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold' style={{ color: '#174EAB' }}>
                                        142
                                    </div>
                                    <p className='text-muted-foreground text-xs'>+12% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Approved Claims</CardTitle>
                                    <DollarSign className='text-muted-foreground h-4 w-4' />
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold' style={{ color: '#04C7FE' }}>
                                        $12,546
                                    </div>
                                    <p className='text-muted-foreground text-xs'>+8.2% from last month</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Pending Refunds</CardTitle>
                                    <RefreshCcw className='text-muted-foreground h-4 w-4' />
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold' style={{ color: '#04C7FE' }}>
                                        24
                                    </div>
                                    <p className='text-muted-foreground text-xs'>-3% from last month</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                            <Card className='col-span-4'>
                                <CardHeader>
                                    <CardTitle>Claims Overview</CardTitle>
                                </CardHeader>
                                <CardContent className='pl-2'>
                                    <div className='flex h-[300px] items-center justify-center rounded-md bg-gray-50'>
                                        <Activity className='h-16 w-16 text-gray-300' />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='col-span-3'>
                                <CardHeader>
                                    <CardTitle>Recent Activity</CardTitle>
                                    <CardDescription>You have 12 new notifications</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-4'>
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className='flex items-center gap-4'>
                                                <div
                                                    className='rounded-full p-2'
                                                    style={{ backgroundColor: 'rgba(4, 199, 254, 0.1)' }}>
                                                    {i % 2 === 0 ? (
                                                        <CreditCard className='h-4 w-4' style={{ color: '#04C7FE' }} />
                                                    ) : (
                                                        <Calendar className='h-4 w-4' style={{ color: '#174EAB' }} />
                                                    )}
                                                </div>
                                                <div className='flex-1 space-y-1'>
                                                    <p className='text-sm leading-none font-medium'>
                                                        {i % 2 === 0 ? 'New claim submitted' : 'Appointment scheduled'}
                                                    </p>
                                                    <p className='text-muted-foreground text-xs'>
                                                        {i % 2 === 0
                                                            ? 'Claim #1234 for $560'
                                                            : 'Dr. Smith on May 10, 2023'}
                                                    </p>
                                                </div>
                                                <div className='text-muted-foreground text-xs'>
                                                    {i === 1
                                                        ? 'Just now'
                                                        : i === 2
                                                          ? '2h ago'
                                                          : i === 3
                                                            ? 'Yesterday'
                                                            : '2d ago'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
                {activeItem === 'submit-doc' && <DocumentUploadPage />}
                {activeItem === 'refund' && <RefundRequestContent />}
                {activeItem === 'settings' && <SettingsContent />}
            </main>
        </div>
    );
}
