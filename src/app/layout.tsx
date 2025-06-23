import type { Metadata } from "next";
import { Poppins, Roboto, VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // for headings
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"], // for body
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeweka",
  description: "A Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased `}>
        <div className=" relative flex size-full min-h-screen flex-col overflow-x-hidden">
          <div className="flex h-full grow flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
