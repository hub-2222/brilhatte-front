import {Inter} from "next/font/google";
import "./globals.css";
import Home from "@/app/page";
import Navbar from "@/app/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <Home></Home>
        <div></div>
      </body>
    </html>
  );
}