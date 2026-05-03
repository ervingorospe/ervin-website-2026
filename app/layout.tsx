import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ervin Gorospe",
  description:
    "Software Developer, Web Developer, Mobile Developer, Front-end Developer, Back-end Developer",
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Ervin Gorospe",
    description:
      "Software Developer, Web Developer, Mobile Developer, Front-end Developer, Back-end Developer",
    url: "https://ervin-gorospe.vercel.app",
    siteName: "Ervin Gorospe",
    images: [
      {
        url: "/ervin-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ervin Gorospe Portfolio",
      },
    ],
    locale: "en_PH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ervin Gorospe",
    description:
      "Software Developer, Web Developer, Mobile Developer, Front-end Developer, Back-end Developer",
    images: ["/ervin-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning={true}
    >
      <body>{children}</body>
    </html>
  );
}
