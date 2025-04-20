import Link from 'next/link';

import { BlobAnimation } from '@/components/home/blob-animation';
import { HowItWorks } from '@/components/home/how-it-works';
import { MobileMenu } from '@/components/home/mobile-menu';

import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className='relative min-h-screen overflow-hidden bg-white'>
            {/* Top curved lines */}
            <div className='absolute top-0 left-0 flex h-[60rem] w-full items-center justify-center overflow-hidden'>
                <div className='absolute -top-[18.5rem] h-[27rem] w-[70%] rounded-[100%] border-4 border-[#05B8FC]'></div>
                <div className='absolute -top-[18.5rem] h-[28rem] w-[72%] rounded-[100%] border-4 border-[#2A79FD]'></div>
                <div className='absolute -top-[18rem] h-[60rem] w-[120%] rounded-[50%] border-6 border-[#2A79FD] opacity-40'></div>
            </div>

            {/* Content container */}
            <div className='relative z-10'>
                <div>
                    <BlobAnimation />
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
                        <h1 className='mt-16 mb-8 text-3xl leading-relaxed font-bold text-black md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed'>
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
                                href='/auth/sign-up'
                                className='inline-flex w-[23%] items-center justify-center rounded-full bg-gradient-to-r from-[#174EAB] via-[#04C7FE] to-[#174EAB] p-[2.2px] font-medium text-gray-800 shadow-sm transition-all hover:shadow'>
                                <span className='inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3'>
                                    Get Started <ArrowRight className='ml-2 h-4 w-4' />
                                </span>
                            </Link>
                        </div>
                    </main>
                </div>

                {/* Data Security Section */}
                <section className='mt-[15rem] flex w-full flex-col items-center justify-center gap-12 text-center'>
                    <h1 className='text-3xl font-[500] text-black'>Maintain the Full Legal Protection of Your Data</h1>
                    <svg
                        width='80%'
                        height='20rem'
                        viewBox='0 0 1435 233'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M813 85.5C813 85.5 1071.5 85.5 1103 85.5C1134.5 85.5 1108 19.5 1140 19.5C1172 19.5001 1431.5 19.5 1431.5 19.5'
                            stroke='#04C7FE'
                        />
                        <rect x='1227' width='111' height='39' rx='19.5' fill='white' />
                        <rect x='1230' y='3' width='105' height='33' rx='16.5' stroke='#04C7FE' />
                        <path
                            d='M807 147C807 147 1068.22 147 1100.05 147C1131.88 147 1105.1 213 1137.44 213C1169.77 213 1432 213 1432 213'
                            stroke='#04C7FE'
                        />
                        <rect width='111' height='39' rx='19.5' transform='matrix(1 0 0 -1 1227 232.5)' fill='white' />
                        <rect
                            x='3'
                            y='-3'
                            width='105'
                            height='33'
                            rx='16.5'
                            transform='matrix(1 0 0 -1 1227 226.5)'
                            stroke='#04C7FE'
                        />
                        <path
                            d='M621.5 85.5C621.5 85.5 363 85.5 331.5 85.5C300 85.5 326.5 19.5 294.5 19.5C262.5 19.5001 3 19.5 3 19.5'
                            stroke='#FEC7C9'
                        />
                        <rect
                            x='-3'
                            y='3'
                            width='105'
                            height='33'
                            rx='16.5'
                            transform='matrix(-1 0 0 1 201.5 0)'
                            fill='white'
                            stroke='#FEC7C9'
                        />
                        <path
                            d='M631 146C631 146 368.53 146 336.546 146C304.562 146 331.469 213 298.977 213C266.486 213 2.99999 213 2.99999 213'
                            stroke='#FEC7C9'
                        />
                        <rect
                            x='204.5'
                            y='229.5'
                            width='105'
                            height='33'
                            rx='16.5'
                            transform='rotate(180 204.5 229.5)'
                            fill='white'
                            stroke='#FEC7C9'
                        />
                        <ellipse cx='717.5' cy='114' rx='100.5' ry='97' fill='white' />
                        <path
                            d='M717.5 21C770.93 21 814 62.77 814 114C814 165.23 770.93 207 717.5 207C664.07 207 621 165.23 621 114C621 62.77 664.07 21 717.5 21Z'
                            stroke='#2A79FD'
                        />
                        <path
                            d='M1168.5 205.5C1173.08 205.5 1176.5 208.787 1176.5 212.5C1176.5 216.213 1173.08 219.5 1168.5 219.5C1163.92 219.5 1160.5 216.213 1160.5 212.5C1160.5 208.787 1163.92 205.5 1168.5 205.5Z'
                            fill='white'
                            stroke='#C5F2FE'
                        />
                        <path
                            d='M460.5 78.5C465.08 78.5 468.5 81.7865 468.5 85.5C468.5 89.2135 465.08 92.5 460.5 92.5C455.92 92.5 452.5 89.2135 452.5 85.5C452.5 81.7865 455.92 78.5 460.5 78.5Z'
                            fill='white'
                            stroke='#FEC7C9'
                        />
                        <path
                            d='M360.5 108.5C365.08 108.5 368.5 111.787 368.5 115.5C368.5 119.213 365.08 122.5 360.5 122.5C355.92 122.5 352.5 119.213 352.5 115.5C352.5 111.787 355.92 108.5 360.5 108.5Z'
                            fill='white'
                            stroke='#FEC7C9'
                        />
                    </svg>
                    <div className='mt-[5rem] flex h-[18rem] w-full items-center justify-center border-y-6 border-[#2A79FD]/40'>
                        <img src='/images/cnam-logo.png' alt='CNAM Logo Image' className='w-[55%] object-contain' />
                    </div>
                </section>
                {/* How it Works Section */}
                <section className='mt-[15rem] px-16'>
                    <HowItWorks />
                </section>
            </div>
        </div>
    );
}

export function Logo({ size = 35 }) {
    return (
        <>
            <img src='/icon.svg' alt='Seha Logo' width={size} height={size} />
        </>
    );
}
