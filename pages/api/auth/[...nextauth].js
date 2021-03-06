import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    
  ],
    
      database: process.env.DATABASE_URL,

      callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {
          if (user) {
            token.uid = user.id;
          }
          return Promise.resolve(token);
        },
        session: async (session, user) => {
          session.user.uid = user.uid;
          return Promise.resolve(session);
        }
      }
})
