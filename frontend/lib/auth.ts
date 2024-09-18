import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchPost } from "./fetch";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    jwt({ token, account, user}) {
        if (account) {
            if (user && user.id)
                token.id = user?.id
        }
        return token
    },
    session({ session, token}) {
        session.user.id = token.id as string
        delete session.user.image
        return session
    }
  },
  theme: {
    colorScheme: "dark"
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email Address",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await fetchPost('login', { email: (credentials as any).username, password: credentials?.password})
        console.log("authorize: ", user)
        if (user?.user?.password)
            delete user.user.password;
        if (user?.user?.image)
            delete user.user.image
        return user.user;
      },
    }),
  ],
};
