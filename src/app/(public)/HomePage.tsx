import Link from 'next/link';

import { BlobAnimation } from '@/components/home/blob-animation';
import { ContactSection } from '@/components/home/contact-section';
import Footer from '@/components/home/footer';
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
                    <div className='mt-[5rem] flex h-[18rem] w-full items-center justify-center border-b-6 border-[#2A79FD]/40'>
                        <img src='/images/cnam-logo.png' alt='CNAM Logo Image' className='w-[55%] object-contain' />
                    </div>
                </section>
                {/* How it Works Section */}
                <section className='mt-[15rem] px-16'>
                    <HowItWorks />
                </section>

                {/* Contact Section */}
                <ContactSection />

                {/* Footer Section */}
                <Footer />
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
