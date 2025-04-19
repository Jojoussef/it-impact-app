import { prisma } from '@/lib/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/signin' // Custom sign-in page (if you want one)
        // signOut: "/auth/signout", // Custom sign-out page
        // error: "/auth/error", // Error page
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
        // Add more providers as needed
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture as string;
            }

            return session;
        },
        async jwt({ token, user }) {
            const dbUser = user
                ? await prisma.user.findUnique({
                      where: { email: user.email! }
                  })
                : null;

            if (dbUser) {
                token.id = dbUser.id;
            }

            return token;
        }
    }
};
