"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Manrope } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import { Providers } from "@/app/providers";
import { usePathname } from "next/navigation";

const manrope = Manrope({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLanding = usePathname() === "/";

  return (
    <Providers>
      <div
        className={`${manrope.className} antialiased flex flex-col h-[100dvh] min-h-[100dvh] bg-white`}
      >
        {!isLanding && <Header />}
        {!isLanding && (
          <div className="h-14 flex-shrink-0 pointer-events-none" />
        )}
        <MobileMenu />
        <main
          className={`relative flex-grow flex flex-col text-black bg-white ${
            isLanding ? "" : "my-16"
          }`}
        >
          {children}
        </main>
        {!isLanding && (
          <div className="h-14 flex-shrink-0 pointer-events-none" />
        )}
        {!isLanding && <Footer />}
      </div>
    </Providers>
  );
}
