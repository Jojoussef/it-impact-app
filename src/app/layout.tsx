import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';

// Added import for Roboto Serif

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import AuthProvider from '@/components/auth/session-provider';

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    variable: '--font-roboto-serif',
    weight: ['400', '500', '700']
});

export const metadata = {
    title: 'Seha - Shape the Future of Health',
    description: 'Join Seha and help shape the future of health services',
    icons: {
        icon: '/favicon.ico'
    }
} as Metadata;

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body className={` ${robotoSerif.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>
                    <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
