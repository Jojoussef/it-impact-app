import Link from 'next/link';

import { BlobAnimation } from '@/components/home/blob-animation';
import { MobileMenu } from '@/components/home/mobile-menu';

import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white'>
            {/* Animated blurred blobs */}

            <BlobAnimation />

            {/* Top curved lines */}
            <div className='absolute top-0 left-0 flex h-[500px] w-full items-center justify-center overflow-hidden'>
                <div className='absolute top-0 h-[100px] w-[50%] rounded-[70%] border-b-4 border-blue-300'></div>

                <div className='absolute top-0 h-[500px] w-[120%] rounded-[50%] border-b-4 border-blue-300 opacity-30'></div>
                <div className='absolute top-[-50px] h-[500px] w-[110%] rounded-[50%] border-b-4 border-blue-400 opacity-40'></div>
            </div>

            {/* Content container */}
            <div className='relative z-10'>
                {/* Navigation */}
                <header className='container mx-auto flex items-center justify-between px-4 py-6'>
                    <div className='flex items-center'>
                        <div className='mr-2 pl-2'>
                            <Logo />
                        </div>
                    </div>

                    <nav className='hidden space-x-8 font-medium text-gray-700 md:flex'>
                        <Link href='#services' className='transition-colors hover:text-blue-500'>
                            Services
                        </Link>
                        <Link href='#how-it-works' className='transition-colors hover:text-blue-500'>
                            How it works
                        </Link>
                        <Link href='#contact' className='transition-colors hover:text-blue-500'>
                            Contact
                        </Link>
                        <Link href='#about' className='transition-colors hover:text-blue-500'>
                            About
                        </Link>
                    </nav>

                    <div className='flex items-center'>
                        <button className='hidden rounded-full bg-blue-400 px-6 py-2 text-white transition-colors hover:bg-blue-500 md:block'>
                            Login
                        </button>
                        <MobileMenu />
                    </div>
                </header>

                {/* Hero Section */}
                <main className='container mx-auto px-4 pt-16 pb-32 text-center'>
                    <h1 className='mt-16 mb-8 text-3xl font-bold md:text-4xl lg:text-5xl'>
                        Join{' '}
                        <div className='relative inline-block'>
                            <span className='bg-gradient-to-r from-[#174EAB] via-[#04C7FE] to-[#174EAB] bg-clip-text text-[3.5rem] text-transparent'>
                                Seha
                            </span>
                            <div className='absolute -top-[20px] -right-6 rotate-25'>
                                <Logo size={50} />
                            </div>
                        </div>{' '}
                        & Shape the <br className='hidden md:block' />
                        Future of Health
                    </h1>

                    <div className='mt-12'>
                        <Link
                            href='#get-started'
                            className='inline-flex items-center rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-800 shadow-sm transition-all hover:bg-gray-50 hover:shadow'>
                            Get Started <ArrowRight className='ml-2 h-4 w-4' />
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

function Logo({ size = 35 }) {
    return (
        <>
            <img src='/icon.svg' alt='Seha Logo' width={size} height={size} />
        </>
    );
}
