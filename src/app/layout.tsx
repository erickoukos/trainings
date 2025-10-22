import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Lish AI Labs - Professional AI Training Platform",
  description: "Transform your career with cutting-edge AI training programs. Expert-led courses, industry certifications, and hands-on projects designed by Lish AI Labs professionals.",
  keywords: "AI training, machine learning, data science, professional development, Lish AI Labs",
  authors: [{ name: "Lish AI Labs" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Lish AI Labs - Professional AI Training Platform",
    description: "Transform your career with cutting-edge AI training programs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lish AI Labs - Professional AI Training Platform",
    description: "Transform your career with cutting-edge AI training programs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}