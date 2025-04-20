export function DigitizationSection() {
    return (
        <section className='relative overflow-hidden border-y-6 border-[#2A79FD]/40 py-30'>
            {/* Background gradient */}
            <div className='bg-gradient-radial absolute inset-0 from-blue-50 to-blue-100 opacity-70'></div>

            <div className='relative z-10 container mx-auto px-4'>
                <div className='mx-auto max-w-4xl space-y-6 text-center'>
                    <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
                        The Next Era Of
                        <br />
                        Administrative Digitization
                    </h2>

                    <p className='text-xl font-medium text-blue-600 md:text-2xl'>Snap, Submit, Stay Home.</p>

                    <div className='mx-auto mt-10 max-w-3xl'>
                        <p className='text-lg leading-relaxed text-gray-700 md:text-xl'>
                            A smart AI-powered platform that lets citizens handle healthcare paperwork from anywhere,
                            simplifying processes and eliminating the need for in-person visits.
                        </p>
                    </div>

                    <p className='mt-8 text-xl text-blue-500'>You're now, just a photo away!</p>
                </div>
            </div>
        </section>
    );
}
