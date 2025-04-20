'use client';

import { useState } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        id: '',
        email: '',
        phone: '',
        requestType: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form or show success message
        alert('Message sent successfully!');
        setFormData({
            fullName: '',
            id: '',
            email: '',
            phone: '',
            requestType: '',
            message: ''
        });
    };

    return (
        <section id='contact' className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='mx-auto max-w-6xl rounded-2xl border border-blue-400 bg-white p-8 shadow-lg md:p-12'>
                    <div className='grid items-center gap-12 md:grid-cols-2'>
                        {/* Left Column - Contact Info */}
                        <div className='relative'>
                            {/* Blue gradient blob */}
                            <div className='absolute top-1/2 -right-[5rem] z-0 -translate-y-1/2 opacity-30'>
                                <div className='relative h-[250px] w-[200px] rotate-45'>
                                    <div className='animate-blob animation-delay-2000 absolute inset-0 rounded-[85%_15%_50%_75%/25%_85%_35%_15%] bg-gradient-to-br from-[#174EAB] to-[#05B8FC] opacity-75 blur-[70px]'></div>
                                    <div className='animate-blob animation-delay-4000 absolute inset-0 rounded-[13%_77%_42%_63%/65%_25%_85%_35%] bg-gradient-to-br from-[#05B8FC] to-[#174EAB] opacity-50 blur-[70px]'></div>
                                    <div className='animate-blob animation-delay-3000 absolute inset-0 rounded-[63%_37%_84%_16%/38%_75%_25%_62%] bg-gradient-to-br from-[#3b82f6] to-[#93c5fd] opacity-40 blur-[70px]'></div>
                                </div>
                            </div>

                            <div className='relative z-10'>
                                <h2 className='mb-10 text-3xl font-bold md:text-4xl'>Get In Touch</h2>

                                <div className='space-y-8'>
                                    <div className='flex items-start'>
                                        <div className='mr-4 rounded-full bg-gray-100 p-3'>
                                            <MapPin className='h-6 w-6 text-blue-500' />
                                        </div>
                                        <div>
                                            <h3 className='mb-1 text-lg font-bold'>Location</h3>
                                            <p className='text-gray-600'>
                                                12, Rue Abou Hamad El Ghazeli
                                                <br />
                                                Montplaisir, 1073 Tunis
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start'>
                                        <div className='mr-4 rounded-full bg-gray-100 p-3'>
                                            <Phone className='h-6 w-6 text-blue-500' />
                                        </div>
                                        <div>
                                            <h3 className='mb-1 text-lg font-bold'>Phone Number</h3>
                                            <p className='text-gray-600'>+216 71 104 200</p>
                                            <p className='text-gray-600'>+216 71 104 350</p>
                                        </div>
                                    </div>

                                    <div className='flex items-start'>
                                        <div className='mr-4 rounded-full bg-gray-100 p-3'>
                                            <Mail className='h-6 w-6 text-blue-500' />
                                        </div>
                                        <div>
                                            <h3 className='mb-1 text-lg font-bold'>E-mail</h3>
                                            <p className='text-gray-600'>brc@cnam.nat.tn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className='rounded-xl bg-white p-6 shadow-sm md:p-8'>
                            <h2 className='mb-6 text-right text-2xl font-bold'>Contact Us</h2>

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label htmlFor='fullName' className='mb-1 block text-sm font-medium'>
                                        Full Name :
                                    </label>
                                    <input
                                        type='text'
                                        id='fullName'
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='id' className='mb-1 block text-sm font-medium'>
                                        ID :
                                    </label>
                                    <input
                                        type='text'
                                        id='id'
                                        name='id'
                                        value={formData.id}
                                        onChange={handleChange}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='email' className='mb-1 block text-sm font-medium'>
                                        Email :
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='phone' className='mb-1 block text-sm font-medium'>
                                        Phone Number :
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='requestType' className='mb-1 block text-sm font-medium'>
                                        Type de demande :
                                    </label>
                                    <input
                                        type='text'
                                        id='requestType'
                                        name='requestType'
                                        value={formData.requestType}
                                        onChange={handleChange}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='message' className='mb-1 block text-sm font-medium'>
                                        Message :
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className='w-full rounded-md bg-blue-50 p-3'
                                        required></textarea>
                                </div>

                                <div className='pt-2'>
                                    <button
                                        type='submit'
                                        className='w-full rounded-md bg-blue-500 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-600'>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
