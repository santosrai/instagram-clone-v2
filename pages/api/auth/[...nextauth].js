import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  theme: {
    // Customize the look and feel of NextAuth
    logo: "/static/images/logo.svg",
    color: "#0070f3",
    backgroundColor: "#f7f7f7",
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "normal",
    fontColor: "#333",
  },
  
  pages: {
    signIn: "auth/signin",
    signOut: "auth/signout",
    },
})