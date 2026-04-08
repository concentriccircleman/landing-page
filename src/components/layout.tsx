"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import CursorTrail from "@/components/cursor-trail";
import CrosshatchSquares from "@/components/crosshatch-squares";

import { Providers } from "@/app/providers";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  const isBlogRoute = pathname.startsWith("/blog");
  const isAuthRoute = pathname === "/sign-in";

  const validRoutes = [
    "/",
    "/about",
    "/contact",
    "/manifesto",
    "/careers",
    "/privacy",
    "/terms",
    "/data-privacy",
    "/pricing",
    "/blog",
    "/sign-in",
    "/research",
    "/use-cases",
  ];

  const isNotFound = !validRoutes.includes(pathname) && !isBlogRoute;

  if (isAuthRoute) {
    return (
      <Providers>
        {children}
      </Providers>
    );
  }

  return (
    <Providers>
      <CursorTrail />
      <CrosshatchSquares />
      <div className="relative min-h-screen flex flex-col bg-[#f8f8f8]">
        {isLanding ? (
          <>
            <Header />
            <main className="flex-1 flex flex-col pb-0">
              {children}
            </main>
          </>
        ) : isNotFound ? (
          <>
            <Header />
            <main className="flex-1 flex flex-col py-40">
              {children}
            </main>
          </>
        ) : (
          <>
            <Header />
            <main className="flex-1 flex flex-col py-40 max-w-screen-2xl mx-auto w-full">
              {children}
            </main>
          </>
        )}
        <Footer />
      </div>
    </Providers>
  );
}
