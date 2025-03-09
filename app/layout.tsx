import {Inter} from "next/font/google";
import { Metadata } from 'next';
import "./globals.css";
import Home from "@/app/page";
import Navbar from "@/app/components/navbar/Navbar";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Brilhatte',
    description: 'Site oficial da Brilhatte',
    icons: {
        icon: '/img/logo-brilhatte.png',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {
           <EdgeStoreProvider>{children}</EdgeStoreProvider>
        }
        
        <div></div>
      </body>
    </html>
  );
}