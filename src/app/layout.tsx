import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pn-corporate-site.vercel.app"),
  title: "合同会社PN | 発信資本経営支援会社",
  description:
    "合同会社PNは、良いモノ・人・文化を埋もれさせないための発信資本経営支援会社です。SNS運用、採用、動画制作、AI活用まで一気通貫で支援します。",
  openGraph: {
    title: "合同会社PN | 発信資本経営支援会社",
    description:
      "良いモノ・人・文化を埋もれさせない。SNS、採用、動画、AIで事業の発信資本を育てます。",
    images: ["/images/pn-hero.png"],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
