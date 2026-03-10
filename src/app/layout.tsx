import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ParticleBackground from "./components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshita Aggarwal Portfolio",
  description: "Portfolio website Built by Harshita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg transition-colors text-body`}
      >
        <ParticleBackground />
        <ThemeProvider>
          <Navbar />
        <main className="min-h-screen pt-24 relative z-10">{children}</main>
        <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
