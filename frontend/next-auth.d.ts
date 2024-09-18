import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session extends Omit<Session, 'user.image'> {
        accessToken: string | unknown;
        user: {
            id: string;
        } & Omit<DefaultSession['user'], 'image'>
    }
}