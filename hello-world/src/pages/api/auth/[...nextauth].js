import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
        clientId: 'e6bff1b0f877253e03b4',
        clientSecret: '6cc8e16d60bf6c28bb9ea0ac9269110cfac5fe11'
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  }
})
