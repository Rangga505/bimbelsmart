import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bimbel Smart — Belajar Lebih Terarah, Prestasi Lebih Nyata",
  description:
    "Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau, materi terstruktur, dan teknologi modern. Berdiri sejak 2016 di Pakisaji, Kabupaten Malang.",
  keywords: [
    "bimbel",
    "bimbingan belajar",
    "les privat",
    "SD",
    "SMP",
    "Malang",
    "Pakisaji",
  ],
  openGraph: {
    title: "Bimbel Smart — Belajar Lebih Terarah, Prestasi Lebih Nyata",
    description:
      "Bimbel Smart membantu murid TK, SD, dan SMP belajar dengan sistem yang terpantau, materi terstruktur, dan teknologi modern.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
