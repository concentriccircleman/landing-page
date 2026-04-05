"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import sentraLogo from "@/assets/brand/sentra.png";
import PixelShimmer from "@/components/pixel-shimmer";

const inputClassName =
  "w-full h-11 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,149,238,0.15)] transition-colors duration-150 rounded-lg";

const socialButtonClassName =
  "flex items-center justify-center gap-2.5 w-full h-11 bg-white text-[14px] font-medium text-[#1a1a1f] border border-[#e0e0e3] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:border-[#d4d4d8] transition-all duration-150 cursor-pointer";

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 21 21">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

const EyeIcon = ({ isVisible }: { isVisible: boolean }) => (
  <svg className="w-4 h-4 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {isVisible ? (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    )}
  </svg>
);

const EASE_OUT_QUAD: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT_QUAD },
  }),
};

const SignInPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const hasEmail = emailValue.trim().length > 0;

  return (
    <div className="h-screen flex bg-[#f8f8f8] relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 100%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 100%, black 0%, transparent 70%)",
        }}
      >
        <PixelShimmer spawnRate={1} fadeRate={0.00015} maxOpacity={0.62} />
      </div>
      <div className="relative w-full flex items-center justify-center px-6 py-12 z-10">
        <motion.div
          className="absolute top-6 left-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT_QUAD }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[12px] text-[#a1a1aa] hover:text-[#1a1a1f] transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        <motion.div
          className="w-full max-w-sm flex flex-col"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col items-start mb-3" custom={0} variants={fadeUp}>
            <Link href="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity duration-200">
              <Image src={sentraLogo} alt="Sentra" width={32} height={32} />
            </Link>
            <h1 className="text-2xl font-semibold tracking-tighter text-[#1a1a1f]">
              Log into your account
            </h1>
          </motion.div>

          <motion.div className="flex flex-col" custom={0.05} variants={fadeUp}>
            <form
              className="flex flex-col"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="flex flex-col">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter work email"
                    autoComplete="email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    className={inputClassName}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </div>
              </label>

              {hasEmail && (
                <motion.label
                  className="flex flex-col gap-2 mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: EASE_OUT_QUAD }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-[#71717a]">
                      Password
                    </span>
                    <button
                      type="button"
                      className="text-[11px] text-[#71717a] hover:text-[#1a1a1f] transition-colors duration-150 cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      className={inputClassName}
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible((previous) => !previous)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:opacity-70 transition-opacity duration-150 cursor-pointer"
                    >
                      <EyeIcon isVisible={isPasswordVisible} />
                    </button>
                  </div>
                </motion.label>
              )}

              <div className="flex flex-col gap-3 mt-8">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 bg-brand text-[#f0f0f0] text-[14px] font-medium rounded-lg cursor-pointer shadow-[0_0_0_1px_#1a7dd4,0_2px_4px_rgba(37,149,238,0.3),0_6px_16px_rgba(37,149,238,0.2),0_12px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_#1a7dd4,0_4px_8px_rgba(37,149,238,0.35),0_10px_24px_rgba(37,149,238,0.25),0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200 active:scale-[0.97] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,149,238,0.2)]"
                >
                  Login
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button type="button" className={socialButtonClassName}>
                  <GoogleIcon />
                  Sign in with Google
                </button>
                <button type="button" className={socialButtonClassName}>
                  <MicrosoftIcon />
                  Sign in with Microsoft
                </button>
              </div>
            </form>

            <p className="text-center text-[14px] text-[#a1a1aa] mt-8">
              Don&apos;t have an account?{" "}
              <Link href="/contact" className="text-brand font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default SignInPage;
