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
                fullname: {label: "fullname", type: "text"},
                password: {label:"Password", type: "password"},
            },
            async authorize(credentials){
                const {email,password,fullname} = credentials as {
                    email: string;
                    password: string;
                    fullname: string;
                };
                console.log('test')
                const user: any = { id: 1, email: email, password: password,fullname: fullname};
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
        jwt({token,account,profile,user}: any){
            if(account?.provider === "credentials") {
                token.email = user.email
                token.fullname = user.fullname
            }
            if(account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    image: user.image,
                    type: "google"
                }
                token.email = data.email
                token.fullname = data.fullname
                token.image = data.image
                token.type = data.type
                console.log('data',data)
            }

            return token;
        },

        async session({session,token}: any){
            if("email" in token){
                session.user.email = token.email;
            }

            if("fullname" in token){
                session.user.fullname = token.fullname;
            }

            if("image" in token){
                session.user.image = token.image;
            }

            console.log(session,token)
            return session;
        }

    },
    pages:{
        // signIn: "/bible/navbar"
    }
}

export default NextAuth(authOptions);