import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s | UPlus ",
    default: "Ureca| UPlus ",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar></Navbar>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
