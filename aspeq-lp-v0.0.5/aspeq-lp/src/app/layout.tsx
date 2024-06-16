import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Header from "@/components/header";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
