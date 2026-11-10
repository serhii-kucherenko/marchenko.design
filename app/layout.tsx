import type { Metadata } from "next";
import { CustomThemeProvider } from "@/theme/theme-provider";
import "./globals.css";
import { ebGaramond, inter } from "@/theme/typography";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marchenko.design"),
  title: {
    default: "Anastasiia Marchenko | Product Designer",
    template: "%s | Anastasiia Marchenko",
  },
  description:
    "Anastasiia Marchenko is a senior product designer specializing in product strategy, design systems, web and mobile experiences, and complex enterprise platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anastasiia Marchenko | Product Designer",
    description:
      "Anastasiia Marchenko is a senior product designer specializing in product strategy, design systems, web and mobile experiences, and complex enterprise platforms.",
    url: "https://www.marchenko.design",
    siteName: "Anastasiia Marchenko",
    images: [
      {
        url: "https://www.marchenko.design/og.png",
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
  verification: {
    google: "MzcvKBG3HLvrTZEd66z6C9HdYwuWYLpTzvF_U7csgOg",
  },
  twitter: {
    title: "Anastasiia Marchenko | Product Designer",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anastasiia Marchenko",
    url: "https://www.marchenko.design",
    jobTitle: "Senior Product Designer",
    description:
      "Senior product designer specializing in product strategy, design systems, web and mobile experiences, and complex enterprise platforms.",
    sameAs: [
      "https://www.linkedin.com/in/anastasiia-marchenko/",
      "https://www.figma.com/@anamarchenko",
      "https://dribbble.com/A_March",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${ebGaramond.variable} font-sans`}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
