"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import { Providers } from "@/app/providers";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLanding = usePathname() === "/";

  return (
    <Providers>
      <div
        className={`min-h-screen flex flex-col ${
          isLanding ? "bg-foreground" : "bg-background"
        }`}
      >
        {!isLanding && <Header />}
        <MobileMenu />
        <main className={`flex-1 flex flex-col ${isLanding ? "" : "py-8"}`}>
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
