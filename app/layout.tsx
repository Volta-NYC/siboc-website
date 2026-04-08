import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700"] });
const jost = Jost({ subsets: ["latin"], variable: "--font-head", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "SIBOC | Staten Island Business Outreach Center",
  description: "Our mission is to empower small business on Staten Island.",
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
