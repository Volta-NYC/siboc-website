import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBOC Website",
  description: "Template site for Staten Island Business Outreach Center",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
