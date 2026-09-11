import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://bimbelsmart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bimbel Smart — Belajar Lebih Terarah, Prestasi Lebih Nyata",
    template: "%s | Bimbel Smart",
  },
  description:
    "Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau, materi terstruktur, dan teknologi modern. Berdiri sejak 2016 di Pakisaji, Kabupaten Malang, Jawa Timur.",
  keywords: [
    "bimbel",
    "bimbingan belajar",
    "les privat",
    "les SD",
    "les SMP",
    "bimbel Malang",
    "bimbel Pakisaji",
    "bimbingan belajar SD",
    "bimbingan belajar SMP",
    "les anak Malang",
    "bimbel terbaik Malang",
    "sistem belajar terpantau",
  ],
  authors: [{ name: "Bimbel Smart" }],
  creator: "Bimbel Smart",
  publisher: "Bimbel Smart",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Bimbel Smart",
    title: "Bimbel Smart — Belajar Lebih Terarah, Prestasi Lebih Nyata",
    description:
      "Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau, materi terstruktur, dan teknologi modern. Berdiri sejak 2016 di Pakisaji, Kabupaten Malang.",
    images: [
      {
        url: "/dokumentasi/logo-bimbel-smart.png",
        width: 1200,
        height: 630,
        alt: "Bimbel Smart - Bimbingan Belajar Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimbel Smart — Belajar Lebih Terarah, Prestasi Lebih Nyata",
    description:
      "Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau, materi terstruktur, dan teknologi modern.",
    images: ["/dokumentasi/logo-bimbel-smart.png"],
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
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#1E56A0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bimbel Smart",
    description:
      "Bimbingan belajar untuk murid TK, SD, dan SMP dengan sistem terpantau dan teknologi modern.",
    url: SITE_URL,
    telephone: "+6281615687850",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pakisaji",
      addressRegion: "Kabupaten Malang, Jawa Timur",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.9367,
      longitude: 112.6583,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:15",
        closes: "19:30",
      },
    ],
    priceRange: "$$",
    image: "/dokumentasi/logo-bimbel-smart.png",
    sameAs: [],
  };

  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
