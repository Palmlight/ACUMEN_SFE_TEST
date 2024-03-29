import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import QueryProvider from "./QueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

const Hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body
          className={`${Hanken.variable} font-hanken grid grid-cols-[270px_1fr] min-h-screen relative`}
        >
          <Sidebar />
          <div className="w-full h-full bg-[#F3F7FF]">
            <Navbar />
            <div className="max-h-[94vh] overflow-y-scroll">{children}</div>
          </div>
        </body>
      </html>
    </QueryProvider>
  );
}
