import { authOptions } from '@/lib/auth';

import { getServerSession } from 'next-auth/next';

export const getSession = () => getServerSession(authOptions);

export const getCurrentUser = async () => {
    const session = await getSession();

    return session?.user;
};
