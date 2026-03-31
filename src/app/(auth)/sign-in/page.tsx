"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import sentraLogo from "@/assets/brand/sentra.png";
import IsometricCard from "@/components/isometric-card";
import PixelShimmer from "@/components/pixel-shimmer";

const inputClassName =
  "w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm";

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

  return (
    <div className="min-h-screen flex bg-[#f8f8f8]">
      <div className="relative flex-1 flex items-center justify-center px-6 py-12 md:px-12">
        <motion.div
          className="absolute top-6 left-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT_QUAD }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 h-8 px-3 text-[12px] font-medium bg-white text-[#1a1a1f] hover:bg-[#f4f4f5] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)] transition-all duration-200 active:scale-[0.97]"
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
          <motion.div className="flex flex-col items-center mb-8" custom={0} variants={fadeUp}>
            <Link href="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity duration-200">
              <Image src={sentraLogo} alt="Sentra" width={32} height={32} />
            </Link>
            <h1 className="text-2xl font-semibold tracking-tighter text-[#1a1a1f]">
              Login to your account
            </h1>
            <p className="mt-2 text-[15px] text-[#a1a1aa] leading-relaxed">
              Welcome back. Sign in to continue.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-[#e0e0e3] p-8 flex flex-col gap-6"
            custom={0.05}
            variants={fadeUp}
          >
            <div className="flex flex-col gap-3">
              <IsometricCard>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 w-full h-10 bg-white text-[13px] font-medium text-[#1a1a1f] border border-[#e0e0e3] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-150 cursor-pointer"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>
              </IsometricCard>
              <IsometricCard>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 w-full h-10 bg-white text-[13px] font-medium text-[#1a1a1f] border border-[#e0e0e3] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-150 cursor-pointer"
                >
                  <MicrosoftIcon />
                  Continue with Microsoft
                </button>
              </IsometricCard>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#e8e8ec]" />
              <span className="text-[10px] uppercase tracking-[0.12em] font-medium text-[#a1a1aa] select-none">
                Or continue with email
              </span>
              <div className="flex-1 h-px bg-[#e8e8ec]" />
            </div>

            <form
              className="flex flex-col gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-[#3f3f46]">Email</span>
                <input
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  className={inputClassName}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#3f3f46]">Password</span>
                  <button
                    type="button"
                    className="text-[12px] text-[#71717a] hover:text-[#1a1a1f] transition-colors duration-150 cursor-pointer"
                  >
                    Forgot your password?
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
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 h-10 bg-brand text-[#f0f0f0] text-[13px] font-medium cursor-pointer shadow-[0_0_0_1px_#1e40af,0_2px_4px_rgba(37,99,235,0.3),0_6px_16px_rgba(37,99,235,0.2),0_12px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_#1e40af,0_4px_8px_rgba(37,99,235,0.35),0_10px_24px_rgba(37,99,235,0.25),0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200 active:scale-[0.97] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,0.2)]"
              >
                Sign in
              </button>
            </form>
          </motion.div>

          <motion.p
            className="mt-6 text-center text-[13px] text-[#71717a]"
            custom={0.15}
            variants={fadeUp}
          >
            Don&apos;t have an account?{" "}
            <button type="button" className="text-brand font-medium hover:underline cursor-pointer">
              Sign up
            </button>
          </motion.p>
        </motion.div>
      </div>

      <div className="hidden md:flex flex-1 relative overflow-hidden bg-[#1a1a1f]">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #3f3f46 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <PixelShimmer />

        <motion.div
          className="relative z-10 flex flex-col justify-center px-12 lg:px-20 xl:px-24 max-w-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_QUAD }}
        >
          <span className="text-brand text-6xl font-serif leading-none mb-6 select-none">&ldquo;</span>
          <p className="text-[28px] font-medium leading-snug tracking-tighter text-white/90">
            Sentra has made it way easier for me to stay in touch with my team and know what&apos;s going on.
          </p>
          <p className="mt-8 text-[13px] font-semibold tracking-wide text-white/50">
            CTO at Biostate AI
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;
