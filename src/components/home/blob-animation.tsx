'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

export function BlobAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Circular motion variants for each blob
    const blob1Variants = {
        animate: {
            rotate: 360,
            scale: [1, 1.1, 1],
            transition: {
                rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
                scale: { repeat: Infinity, duration: 10, ease: 'easeInOut' }
            }
        }
    };

    const blob2Variants = {
        animate: {
            rotate: 360,
            scale: [1, 0.9, 1],
            transition: {
                rotate: { repeat: Infinity, duration: 25, ease: 'linear', direction: 'reverse' },
                scale: { repeat: Infinity, duration: 12, ease: 'easeInOut' }
            }
        }
    };

    const blob3Variants = {
        animate: {
            rotate: 360,
            scale: [1, 1.05, 1],
            transition: {
                rotate: { repeat: Infinity, duration: 30, ease: 'linear' },
                scale: { repeat: Infinity, duration: 15, ease: 'easeInOut' }
            }
        }
    };

    const blob4Variants = {
        animate: {
            rotate: 360,
            scale: [1, 1.15, 1],
            transition: {
                rotate: { repeat: Infinity, duration: 18, ease: 'linear', direction: 'reverse' },
                scale: { repeat: Infinity, duration: 9, ease: 'easeInOut' }
            }
        }
    };

    return (
        <div ref={containerRef} id='blobs' className='pointer-events-none absolute inset-0 h-[42rem] overflow-hidden'>
            <div className='relative h-full w-full'>
                <motion.div
                    className='blob absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 opacity-60 blur-[80px]'
                    style={{ x: '200px', y: '0px' }}
                    variants={blob1Variants}
                    animate='animate'
                />
                <motion.div
                    className='blob absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 opacity-70 blur-[70px]'
                    style={{ x: '-250px', y: '50px' }}
                    variants={blob2Variants}
                    animate='animate'
                />
                <motion.div
                    className='blob absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 opacity-60 blur-[90px]'
                    style={{ x: '100px', y: '200px' }}
                    variants={blob3Variants}
                    animate='animate'
                />
                <motion.div
                    className='blob absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 opacity-15 blur-[50px]'
                    style={{ x: '-150px', y: '-180px' }}
                    variants={blob4Variants}
                    animate='animate'
                />
            </div>
        </div>
    );
}
