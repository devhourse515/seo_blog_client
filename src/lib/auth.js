
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {},
     async authorize(credentials) {
        const { email, password } = credentials;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
            });

            if (res.status === 401) {
            console.log('Unauthorized');
            return null;
            }

            if (res.status === 200) {
            const data = await res.json(); // Parse the response JSON
            const user = data.user;  // Destructure user from the response
            console.log('user', user)
            return user; // Return user data directly
            }

            return null;
        } catch (e) {
            console.error("Authorize error:", e);  // Logging error
            throw new Error(e.message);
        }
        }

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },

  pages: {
    signIn: '/login'
  },

  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id; // Add user ID to the token
            token.name = user.name; // Add user name to the token
            token.email = user.email; // Add email to the token
        }
        return token;
    },
    async session({ session, token }) {
        if (session.user) {
            session.user.name = token.name;
            session.user.email = token.email;  // Add email to the session
            session.user.id = token.id;  // Add user ID to the session
        }
        return session;
    }
  }
};
