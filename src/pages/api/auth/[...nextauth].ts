import NextAuth, { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label:"Password", type: "password"},
            },
            async authorize(credentials){
                const {email,password} = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = { id: 1, email: email, password: password};
                console.log('ggg')
                if (user){
                    console.log(user)
                    return user;
                } else{
                    return null;
                }
            }
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
      })
    ],
    callbacks: {
        jwt({token,account,profile,user}){
            if(account?.provider === "credentials") {
                token.email = user.email
            }
            if(account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    iamge: user.image,
                    type: "google"
                }
                console.log(data)
            }
            console.log(token,account,user)
            return token;
        },

        async session({session,token}: any){
            if("email" in token){
                session.user.email = token.email;
            }
            console.log(session,token)
            return session;
        }

    }
}

export default NextAuth(authOptions);