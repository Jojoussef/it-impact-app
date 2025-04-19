// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: '/auth/signin'
    }
});

export const config = {
    // Protect specific routes
    matcher: ['/dashboard/:path*', '/profile/:path*']
};
