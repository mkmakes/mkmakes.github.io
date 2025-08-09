import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mk codes",
  description: "mk codes, mk makes, mk builds",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased prose m-auto py-40">{children}</body>
    </html>
  );
};

export default RootLayout;
