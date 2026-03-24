"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CrossIcon, MenuIcon } from "./icons";
import { fadeVariants } from "@/app/_animations/fade-variants";
import { usePathname } from "next/navigation";
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const iconColor = pathname === "/" ? "#FFFFFF" : "#000000";
  const isHeroPage = pathname === "/";
  const menuBgColor = isHeroPage ? "bg-foreground" : "bg-background";
  const menuTextColor = isHeroPage ? "text-background" : "text-foreground";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((previousIsOpen) => !previousIsOpen);
  };

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative sm:hidden">
      <nav className="flex items-center">
        <button
          className="w-8 h-8 -mr-1 relative border-0 bg-transparent visible sm:hidden transition-opacity duration-300 ease z-[70] pointer-events-auto cursor-pointer"
          aria-label="Menu"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CrossIcon data-hide={false} color={iconColor} />
          ) : (
            <MenuIcon data-hide={false} color={iconColor} />
          )}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className={`fixed inset-0 w-full min-h-screen ${menuBgColor} backdrop-blur-md flex sm:hidden flex-col justify-start items-start text-left gap-2 px-4 pt-32 pb-8 overflow-y-auto z-40`}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.li
                className={`${menuTextColor} text-2xl font-medium whitespace-nowrap w-full`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link className="block w-full py-1" href="/manifesto" onClick={() => handleLinkClick("/manifesto")}>
                  Manifesto
                </Link>
              </motion.li>

              <motion.li
                className={`${menuTextColor} text-2xl font-medium whitespace-nowrap w-full`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link className="block w-full py-1" href="/login" onClick={() => handleLinkClick("/login")}>
                  Sign In
                </Link>
              </motion.li>

              <motion.li
                className={`${menuTextColor} text-2xl font-medium whitespace-nowrap w-full`}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link className="flex items-center gap-2 w-full py-1" href="/download" onClick={() => handleLinkClick("/download")}>
                  <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  Download for Mac
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default MobileMenu;
