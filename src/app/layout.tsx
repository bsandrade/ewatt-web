import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100','300', '400', '500', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "nWatt Energy Ecommerce",
  description: "A melhor forma de economizar com a energia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>ηWatt</title>
      </head>
      <body style={{scrollBehavior:'smooth'}} className={roboto.className}>{children}</body>
    </html>
  );
}
