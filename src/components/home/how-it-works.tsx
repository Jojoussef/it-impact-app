import Image from 'next/image';

export function HowItWorks() {
    return (
        <section id='how-it-works' className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='mb-10 text-center sm:mb-12 md:mb-16'>
                    <h2 className='mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl'>How it Works</h2>
                    <p className='mx-auto max-w-2xl text-sm text-gray-600 sm:text-base'>
                        we make it easy to get up and running in few
                    </p>
                </div>

                <div className='space-y-16 sm:space-y-20 md:space-y-24'>
                    {/* Feature 1 - Convenience */}
                    <div className='flex flex-col items-center gap-6 sm:gap-8 md:flex-row lg:gap-12'>
                        <div className='aspect-video w-full rounded-lg md:w-1/2'>
                            <Image
                                src='/images/conv.png'
                                width={400}
                                height={300}
                                alt='Convenience illustration'
                                className='h-full w-full rounded-lg object-contain'
                                sizes='(max-width: 768px) 100vw, 50vw'
                            />
                        </div>
                        <div className='mt-4 w-full md:mt-0 md:w-1/2 md:pl-6 lg:pl-8'>
                            <h3 className='mb-2 text-center text-xl font-medium sm:mb-4 sm:text-2xl md:text-left'>
                                Convenience
                            </h3>
                            <p className='text-center text-sm text-gray-600 sm:text-base md:text-left'>
                                Take a picture of your CNAM document, any time anywhere
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 - Traceability */}
                    <div className='flex flex-col items-center gap-6 sm:gap-8 md:flex-row-reverse lg:gap-12'>
                        <div className='aspect-video w-full rounded-lg md:w-1/2'>
                            <Image
                                src='/images/tracability.png'
                                width={400}
                                height={300}
                                alt='Traceability illustration'
                                className='h-full w-full rounded-lg object-contain'
                                sizes='(max-width: 768px) 100vw, 50vw'
                            />
                        </div>
                        <div className='mt-4 flex w-full flex-col items-center md:mt-0 md:w-1/2 md:pr-6 lg:pr-8'>
                            <div>
                                <h3 className='mb-2 text-center text-xl font-medium sm:mb-4 sm:text-2xl md:text-left'>
                                    Traçability
                                </h3>
                                <p className='text-center text-sm text-gray-600 sm:text-base md:text-left'>
                                    Track your prescriptions through our secure platform, ensuring a complete digital
                                    record of your healthcare journey
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - AI Analyses */}
                    <div className='flex flex-col items-center gap-6 sm:gap-8 md:flex-row lg:gap-12'>
                        <div className='aspect-video w-full rounded-lg md:w-1/2'>
                            <Image
                                src='/images/ai-analysis.png'
                                width={400}
                                height={300}
                                alt='AI Analyses illustration'
                                className='h-full w-full rounded-lg object-contain'
                                sizes='(max-width: 768px) 100vw, 50vw'
                            />
                        </div>
                        <div className='mt-4 w-full md:mt-0 md:w-1/2 md:pl-6 lg:pl-8'>
                            <h3 className='mb-2 text-center text-xl font-medium sm:mb-4 sm:text-2xl md:text-left'>
                                AI Analyses
                            </h3>
                            <p className='text-center text-sm text-gray-600 sm:text-base md:text-left'>
                                Get personalized insights and recommendations based on your health data, powered by AI
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 - Recommendations */}
                    <div className='flex flex-col items-center gap-6 sm:gap-8 md:flex-row-reverse lg:gap-12'>
                        <div className='aspect-video w-full rounded-lg md:w-1/2'>
                            <Image
                                src='/images/recommendations.png'
                                width={400}
                                height={300}
                                alt='Recommendations illustration'
                                className='h-full w-full bg-transparent object-contain'
                            />
                        </div>
                        <div className='mt-4 flex w-full flex-col items-center md:mt-0 md:w-1/2 md:pr-6 lg:pr-8'>
                            <div>
                                <h3 className='mb-2 text-center text-xl font-medium sm:mb-4 sm:text-2xl md:text-left'>
                                    Recommendations
                                </h3>
                                <p className='text-center text-sm text-gray-600 sm:text-base md:text-left'>
                                    Receive tailored recommendations for your health and wellness based on your data
                                    analysis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
