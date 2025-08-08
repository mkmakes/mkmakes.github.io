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
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
