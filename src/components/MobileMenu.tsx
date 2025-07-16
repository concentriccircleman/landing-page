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
    { path: "/about", label: "About" },
    { path: "/manifesto", label: "Manifesto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav className="w-full flex sm:hidden flex-row justify-end px-8 py-4">
        <div className="w-8 h-8" />
        <button
          className="w-8 h-8 -mr-[5px] relative z-20 border-0 bg-transparent visible sm:hidden my-auto transition-opacity duration-300 ease pointer-events-auto"
          aria-label="Menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="fixed inset-0 w-full h-[100dvh] bg-background backdrop-blur-md flex sm:hidden flex-col justify-center items-center text-center gap-8 px-8 overflow-y-auto pointer-events-auto"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {ROUTES.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-foreground text-2xl sm:text-3xl whitespace-nowrap"
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
                    className="px-4 py-2 duration-200 ease transition-all hover:bg-foreground/10"
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
                <Link href="/login" onClick={() => handleLinkClick("/login")}>
                  <button className="text-sm bg-foreground text-background px-4 py-2 hover:brightness-80 duration-200 w-fit">
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" onClick={() => handleLinkClick("/signup")}>
                  <button className="text-sm bg-primary-600 text-background px-4 py-2 hover:brightness-80 duration-200 w-fit">
                    Sign Up
                  </button>
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
