import { prisma } from '@/lib/db';
import { get } from '@/utils/lodash';
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
        signIn: '/auth/sign-in',
        signOut: '/auth/sign-out'
    },
    providers: [
        GithubProvider({
            clientId: get(process.env, 'GITHUB_CLIENT_ID', ''),
            clientSecret: get(process.env, 'GITHUB_CLIENT_SECRET', '')
        }),
        GoogleProvider({
            clientId: get(process.env, 'GOOGLE_CLIENT_ID', ''),
            clientSecret: get(process.env, 'GOOGLE_CLIENT_SECRET', '')
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session = {
                    ...session,
                    user: {
                        ...get(session, 'user', {}),
                        name: get(token, 'name', ''),
                        email: get(token, 'email', ''),
                        image: get(token, 'picture', '')
                    }
                };
            }

            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                const userEmail = get(user, 'email', '') || undefined;
                const dbUser = await prisma.user.findUnique({
                    where: { email: userEmail }
                });

                if (dbUser) {
                    token.id = get(dbUser, 'id', '');
                }
            }

            return token;
        }
    }
};
