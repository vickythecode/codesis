import "./globals.css";
import type { Metadata } from "next";

// Load fonts normally
import { DM_Serif_Display, Lexend } from "next/font/google";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Lilypads – Real Estate Investing",
  description: "Unprecedented era of real estate investing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"
      className={`${dmSerif.variable} ${lexend.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
