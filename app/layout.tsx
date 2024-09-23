import type { Metadata } from "next";
import { CustomThemeProvider } from "@/theme/theme-provider";
import "./globals.css";
import { ebGaramond, inter } from "@/theme/typography";

export const metadata: Metadata = {
  title: {
    default: "Marchenko Anastasiia | Product Designer",
    template: "%s | Marchenko Anastasiia",
  },
  description:
    "Product designer | Bridging Artistic Vision with User-Centric Solutions",
  openGraph: {
    title: "Marchenko Anastasiia | Product Designer",
    description:
      "Product designer | Bridging Artistic Vision with User-Centric Solutions",
    url: "https://marchenko.design",
    siteName: "Marchenko Anastasiia",
    images: [
      {
        url: "https://marchenko.design/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Marchenko Anastasiia | Product Designer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${inter.variable} ${ebGaramond.variable} font-sans`}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
