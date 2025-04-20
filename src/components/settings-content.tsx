'use client';

import { useEffect, useState } from 'react';

// Replace toast import with Sonner

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Removed the toast import from UI components

import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

export function SettingsContent() {
    const { data: session, update: updateSession, status } = useSession();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Form state
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // Initialize form with session data
    useEffect(() => {
        if (session?.user) {
            setUserData({
                firstName: session.user.name?.split(' ')[0] || '',
                lastName: session.user.name?.split(' ')[1] || '',
                email: session.user.email || ''
            });
        }
    }, [session]);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    };

    // Save profile changes
    const saveProfile = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('/api/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${userData.firstName} ${userData.lastName}`,
                    email: userData.email
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // Update session with new user data
            await updateSession({
                ...session,
                user: {
                    ...session?.user,
                    name: `${userData.firstName} ${userData.lastName}`,
                    email: userData.email
                }
            });

            // Use Sonner toast
            toast.success('Profile updated', {
                description: 'Your profile information has been updated successfully.'
            });
        } catch (error) {
            // Use Sonner toast for error
            toast.error('Error', {
                description: 'Failed to update profile. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <Tabs defaultValue='account' className='w-full'>
            <TabsList className='grid w-full max-w-md grid-cols-3'>
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='notifications'>Notifications</TabsTrigger>
                <TabsTrigger value='security'>Security</TabsTrigger>
            </TabsList>

            <TabsContent value='account' className='mt-4 space-y-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Update your account details here.</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <Label htmlFor='firstName'>First name</Label>
                                <Input id='firstName' value={userData.firstName} onChange={handleChange} />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='lastName'>Last name</Label>
                                <Input id='lastName' value={userData.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input id='email' type='email' value={userData.email} onChange={handleChange} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            style={{ backgroundColor: '#174EAB', color: 'white' }}
                            className='text-white'
                            onClick={saveProfile}
                            disabled={isLoading}>
                            {isLoading ? 'Saving...' : 'Save changes'}
                        </Button>
                    </CardFooter>
                </Card>

                {/* Rest of your component remains the same */}
                {/* ... */}
            </TabsContent>

            {/* Notifications and Security tabs remain unchanged */}
            {/* ... */}
        </Tabs>
    );
}
