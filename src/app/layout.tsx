import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ColorPicker from "../components/colorpicker";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Migle Arambulo",
  description: "Portfolio - UX Designer & Developer",
  authors: [{ name: "Migle Arambulo" }],
  keywords: ["Portfolio", "UX Design", "Development", "Web Development"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-dvh bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
        <div className="relative min-h-dvh">
          {children}
          <ColorPicker />
        </div>
      </body>
    </html>
  );
}
