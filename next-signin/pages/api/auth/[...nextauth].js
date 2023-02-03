import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'e6bff1b0f877253e03b4',
            clientSecret: '6cc8e16d60bf6c28bb9ea0ac9269110cfac5fe11'
        }),
    ],
};

export default NextAuth(authOptions);
