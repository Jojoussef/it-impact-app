'use client';

import { useEffect, useRef } from 'react';

export function BlobAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const blobs = containerRef.current.querySelectorAll('.blob');

        // Set initial positions
        blobs.forEach((blob, index) => {
            const htmlBlob = blob as HTMLElement;
            htmlBlob.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
        });

        // Animate blobs
        let animationFrameId: number;

        const animate = () => {
            blobs.forEach((blob, index) => {
                const htmlBlob = blob as HTMLElement;
                const speed = 0.5 + index * 0.1;
                const time = Date.now() * 0.001 * speed;

                const x = Math.sin(time) * 20;
                const y = Math.cos(time * 0.8) * 20;

                htmlBlob.style.transform = `translate(${x}px, ${y}px)`;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className='pointer-events-none absolute inset-0 overflow-hidden'>
            <div className='blob absolute top-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-60 blur-[80px] transition-transform duration-[10000ms] ease-in-out'></div>
            <div className='blob absolute top-[30%] left-[-150px] h-[300px] w-[300px] rounded-full bg-blue-400 opacity-70 blur-[70px] transition-transform duration-[12000ms] ease-in-out'></div>
            <div className='blob absolute right-[10%] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-blue-200 opacity-60 blur-[90px] transition-transform duration-[15000ms] ease-in-out'></div>
            <div className='blob absolute top-[60%] right-[20%] h-[200px] w-[200px] rounded-full bg-blue-300 opacity-15 blur-[50px] transition-transform duration-[8000ms] ease-in-out'></div>
        </div>
    );
}
