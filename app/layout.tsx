import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/componets/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'




const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Not your normal coffee shop",
  description: "online store for coffee lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
       {children}
       
        </body>
        
    </html>
    
    </ClerkProvider>
  );
}
