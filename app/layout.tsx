import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://initlabel.com"),
  title: {
    default: "InitLabel — Full Screen View",
    template: "%s | InitLabel",
  },
  description:
    "A full-screen viewing experience for InitLabel. Access the InitLabel platform directly in your browser.",
  keywords: ["InitLabel", "initlabel", "full screen", "viewer", "iframe"],
  authors: [{ name: "InitLabel" }],
  creator: "InitLabel",
  publisher: "InitLabel",
  applicationName: "InitLabel Viewer",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://initlabel.com",
    siteName: "InitLabel",
    title: "InitLabel — Full Screen View",
    description:
      "A full-screen viewing experience for InitLabel. Access the InitLabel platform directly in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InitLabel — Full Screen View",
    description: "Access the InitLabel platform directly in your browser.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://initlabel.iceiy.com" />
        <link rel="dns-prefetch" href="https://initlabel.iceiy.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
