import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ervin Gorospe | Software Developer",
  description:
    "Software developer in the Philippines specializing in web and backend development. View projects, experience, and contact details.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Ervin Gorospe | Software Developer",
    description:
      "Software developer in the Philippines specializing in web and backend development. View projects, experience, and contact details.",
    url: "https://ervin-gorospe.vercel.app",
    siteName: "Ervin Gorospe",
    images: [
      {
        url: "https://ervin-gorospe.vercel.app/ervin-og-image.png",
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
    title: "Ervin Gorospe | Software Developer",
    description:
      "Software developer in the Philippines specializing in web and backend development. View projects, experience, and contact details.",
    images: ["https://ervin-gorospe.vercel.app/ervin-og-image.png"],
  },
  metadataBase: new URL("https://ervin-gorospe.vercel.app"),
  alternates: {
    canonical: "/",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ervin Gorospe",
              url: "https://ervin-gorospe.vercel.app",
              jobTitle: "Software Developer",
              image: "https://ervin-gorospe.vercel.app/ervin-og-image.png",
              sameAs: [
                "https://github.com/ervingorospe",
                "https://linkedin.com/in/ervin-gorospe-dev0109",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
