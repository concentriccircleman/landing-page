"use client";

import { AnimatePresence, motion } from "motion/react";
import { CrossIcon, MenuIcon } from "./Icons";
import { useEffect, useState } from "react";

import Link from "next/link";
import { fadeVariants } from "@/app/_animations/fadeVariants";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Use white icons on hero page (homepage), black on other pages
  const iconColor = pathname === "/" ? "#FFFFFF" : "#000000";

  // Use black background on hero page, white on other pages
  const isHeroPage = pathname === "/";
  const menuBgColor = isHeroPage ? "bg-foreground" : "bg-background";
  const menuTextColor = isHeroPage ? "text-background" : "text-foreground";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  function handleLinkClick(href: string) {
    if (pathname === href) {
      setIsMenuOpen(false);
    }
  }

  const ROUTES = [
    { path: "/", label: "Home" },
    { path: "/manifesto", label: "Manifesto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav className="w-full flex sm:hidden flex-row justify-end p-4">
        <button
          className="w-8 h-8 -mr-[5px] relative z-20 border-0 bg-transparent visible sm:hidden my-auto transition-opacity duration-300 ease pointer-events-auto"
          aria-label="Menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} color={iconColor} />
          <CrossIcon data-hide={!isMenuOpen} color={iconColor} />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className={`fixed inset-0 w-full h-[100dvh] ${menuBgColor} backdrop-blur-md flex sm:hidden flex-col justify-center items-center text-center gap-8 px-4 overflow-y-auto pointer-events-auto`}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {ROUTES.map((item, index) => (
                <motion.li
                  key={index}
                  className={`${menuTextColor} text-2xl sm:text-3xl whitespace-nowrap`}
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
                    className={`px-4 py-2 duration-200 ease transition-all ${
                      isHeroPage
                        ? "hover:bg-background/10"
                        : "hover:bg-foreground/10"
                    }`}
                    href={item.path}
                    onClick={() => handleLinkClick(item.path)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="flex flex-col gap-4 mt-8"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <Link
                    href="/login"
                    onClick={() => handleLinkClick("/login")}
                    className={`w-fit mt-2 text-base ${
                      isHeroPage
                        ? "bg-background text-foreground"
                        : "bg-foreground text-background"
                    } px-5 py-2 hover:brightness-80 duration-200 hover:cursor-pointer font-medium`}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => handleLinkClick("/signup")}
                    className="w-fit mt-2 text-base bg-primary-600 text-background px-5 py-2 hover:brightness-80 duration-200 hover:cursor-pointer font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
