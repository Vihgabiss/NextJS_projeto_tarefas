import NextAuth from "next-auth/next";
import GoogleProvide from 'next-auth/providers/google';

export const authOptions = {
    providers:[
        GoogleProvide({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.JWT_SECRET as string,
};

export default NextAuth(authOptions);