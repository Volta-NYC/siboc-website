import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/siteData";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700"] });
const jost = Jost({ subsets: ["latin"], variable: "--font-head", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: "SIBOC | Staten Island Business Outreach Center",
    template: "%s",
  },
  description: SITE.description,
  icons: {
    icon: [
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/icon-192x192.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    siteName: "SIBOC",
    title: "SIBOC | Staten Island Business Outreach Center",
    description: SITE.description,
    images: [SITE.images.hero],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${jost.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
