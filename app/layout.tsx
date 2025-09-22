import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const websiteUrl = "https://orca-q.com";
const siteName = "Orca Query";

export const metadata: Metadata = {
  title: "Orca Query | Open Source Database Editor & Next Generation",
  description:
    "Orca Query is an open-source database editor and Next Generation. Build, explore, and manage databases with ease — built for developers and teams.",
  keywords: [
    "database editor",
    "open source database tool",
    "database manager",
    "DB visual editor",
    "PostgreSQL editor",
    "MySQL editor",
    "Orca Query",
  ],
  authors: [{ name: "Orca Query Team", url: websiteUrl }],
  openGraph: {
    title: "Orca Query | Open Source Database Editor & Next Generation",
    description:
      "Powerful open-source database editor and Next Generation. Simplify SQL, manage schemas, and collaborate on data projects.",
    url: websiteUrl,
    siteName: siteName,
    images: [
      {
        url: "https://orca-q.com/images/editor-preview.png",
        width: 2858,
        height: 1876,
        alt: "Orca Query Database Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Orca Query | Open Source Database Editor & Next Generation",
  //   description:
  //     "Simplify database editing and SQL generation with Orca Query — free & open source.",
  //   images: ["https://orca-query.com/og-image.png"],
  //   creator: "@orcaquery", // replace with your Twitter handle
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: websiteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
