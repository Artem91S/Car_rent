import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Suspense } from "react";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rent App",
  description: "Generated by Artem Sitnikov Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <SignedIn>
            <Header/>
            {children}
            <Footer/> 
          </SignedIn>
          <SignedOut>
            <SignedIn/>
          </SignedOut>
        </ClerkProvider>
      </body>
    </html>
  );
}
