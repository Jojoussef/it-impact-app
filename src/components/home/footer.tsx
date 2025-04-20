const Footer = () => {
    return (
        <footer className='bg-[#F8F9FA] py-10'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center'>
                <div className='flex items-center justify-center gap-2'>
                    <LogoArabic size={30} />
                </div>
                <p className='text-sm text-gray-500'>Delulus - All Right Reserved. 2025</p>
            </div>
        </footer>
    );
};

export default Footer;

const LogoArabic = ({ size = 30 }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-heart'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
        </svg>
    );
};
