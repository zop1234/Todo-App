import { connectDB } from "@/utill/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '140174464534370d8286',
      clientSecret: 'c5bb4d0c18f8c9ae91a65e8dd4238723d90332b2',
    }),
  ],
  secret: 'wer0902',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);