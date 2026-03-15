import "./globals.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "New World Gym | Forge Your Legacy",
  description: "Premium fitness facility with state-of-the-art equipment, expert trainers, and a community dedicated to your success. Join New World Gym today.",
  keywords: "gym, fitness, workout, personal training, bodybuilding, cardio, strength training",
  openGraph: {
    title: "New World Gym | Forge Your Legacy",
    description: "Premium fitness facility with state-of-the-art equipment and expert trainers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "New World Gym | Forge Your Legacy",
    description: "Premium fitness facility with state-of-the-art equipment and expert trainers.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} antialiased bg-[#0a0a0a] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
