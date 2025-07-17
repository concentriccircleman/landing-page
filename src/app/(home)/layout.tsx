"use client";

import { Manrope } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import { Providers } from "@/app/providers";

const manrope = Manrope({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className={`${manrope.className} antialiased min-h-screen flex flex-col`}>
        <MobileMenu />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </div>
    </Providers>
  );
}
