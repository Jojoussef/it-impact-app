const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-screen flex-col'>
            <div className='flex-1 overflow-y-auto'>{children}</div>
        </div>
    );
};

export default DashboardLayout;
