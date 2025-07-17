import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { Providers } from "@/app/providers";
import { manrope } from "@/app/fonts";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div
        className={`${manrope.className} antialiased min-h-screen flex flex-col bg-background`}
      >
        <Header />
        <MobileMenu />
        <main className="flex-1 flex flex-col pt-24 pb-32">
          <div className="w-full">{children}</div>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
