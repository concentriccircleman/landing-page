"use client";

import Image from "next/image";
import sentraLogo from "@/assets/brand/sentra.png";

/* ------------------------------------------------------------------ */
/*  Brand logos – inline SVGs for zero external dependencies          */
/* ------------------------------------------------------------------ */

function AsanaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none">
      <circle cx="16" cy="10" r="5.5" fill="#F06A6A" />
      <circle cx="8.5" cy="21.5" r="5.5" fill="#F06A6A" />
      <circle cx="23.5" cy="21.5" r="5.5" fill="#F06A6A" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#1B1F23">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function GoogleCalendarLogo() {
  return (
    <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
      <rect x="4" y="4" width="28" height="28" rx="4" fill="white" stroke="#E4E4E7" strokeWidth="1" />
      <rect x="4" y="4" width="28" height="8" rx="4" fill="#4285F4" />
      <rect x="4" y="8" width="7" height="24" rx="0" fill="#0B8043" />
      <rect x="25" y="8" width="7" height="24" rx="0" fill="#EA4335" />
      <rect x="4" y="28" width="28" height="4" rx="0" fill="#FBBC04" />
      <rect x="11" y="12" width="14" height="16" fill="white" />
      <text x="18" y="25" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif" fill="#4285F4">31</text>
    </svg>
  );
}

function ZoomLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none">
      <rect width="32" height="32" rx="6" fill="#2D8CFF" />
      <path d="M7 12.5A2.5 2.5 0 019.5 10h8A2.5 2.5 0 0120 12.5v7a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 017 19.5v-7z" fill="white" />
      <path d="M21 14.5l4-2.5v8l-4-2.5v-3z" fill="white" />
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none">
      <path d="M8.5 18.5a2 2 0 11-4 0 2 2 0 012-2h2v2zm1 0a2 2 0 114 0v5a2 2 0 11-4 0v-5z" fill="#E01E5A" />
      <path d="M13.5 8.5a2 2 0 110-4 2 2 0 012 2v2h-2zm0 1a2 2 0 110 4h-5a2 2 0 110-4h5z" fill="#36C5F0" />
      <path d="M23.5 13.5a2 2 0 114 0 2 2 0 01-2 2h-2v-2zm-1 0a2 2 0 11-4 0v-5a2 2 0 114 0v5z" fill="#2EB67D" />
      <path d="M18.5 23.5a2 2 0 110 4 2 2 0 01-2-2v-2h2zm0-1a2 2 0 110-4h5a2 2 0 110 4h-5z" fill="#ECB22E" />
    </svg>
  );
}

function SentraIcon() {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <Image src={sentraLogo} alt="Sentra" width={40} height={40} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icon card wrapper                                                 */
/* ------------------------------------------------------------------ */

function IconCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute flex items-center justify-center w-16 h-16 rounded-xl bg-white border border-[#e4e4e7] shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Chat bubble                                                       */
/* ------------------------------------------------------------------ */

function ChatBubble({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[220px] rounded-xl bg-white border border-[#e4e4e7] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-3.5 ${className}`}
    >
      {/* User question */}
      <div className="flex gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-[#d4d4d8] shrink-0 mt-0.5" />
        <p className="text-[12px] leading-[1.5] text-[#3f3f46]">
          <span className="font-semibold text-[#2563EB]">@Sentra</span>{" "}
          When did we decide to add a feedback widget?
        </p>
      </div>
      {/* Sentra response */}
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-md bg-[#e4e4e7] shrink-0 mt-0.5 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#a1a1aa]" />
        </div>
        <p className="text-[12px] leading-[1.5] text-[#71717a]">
          In a planning meeting on May 27th{" "}
          <span className="font-semibold text-[#2563EB]">@Marzia</span>{" "}
          mentioned customer feedback about...
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function IntegrationsDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] ${className}`}>
      {/* ── Connecting lines (SVG layer) ── */}
      <svg
        viewBox="0 0 800 600"
        fill="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Asana → left edge */}
        <path
          d="M40 210 L240 210"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* Asana → Google Calendar area */}
        <path
          d="M240 230 C220 280, 195 300, 195 320"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* GitHub → Sentra (curved right) */}
        <path
          d="M440 210 C500 230, 540 260, 580 310"
          stroke="#d4d4d8"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* Zoom → Sentra (curved right) */}
        <path
          d="M380 330 C430 340, 500 340, 560 330"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* Slack → chat bubble (curved up-right) */}
        <path
          d="M280 440 C320 430, 340 420, 360 405"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* Chat bubble → Sentra (curved right) */}
        <path
          d="M520 420 C540 400, 570 370, 590 340"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
      </svg>

      {/* ── Integration icon cards ── */}

      {/* Asana – upper left */}
      <IconCard className="left-[26%] top-[27%]">
        <AsanaLogo />
      </IconCard>

      {/* GitHub – upper center-right */}
      <IconCard className="left-[48%] top-[25%]">
        <GitHubLogo />
      </IconCard>

      {/* Google Calendar – middle left */}
      <IconCard className="left-[18%] top-[46%]">
        <GoogleCalendarLogo />
      </IconCard>

      {/* Zoom – center */}
      <IconCard className="left-[38%] top-[46%]">
        <ZoomLogo />
      </IconCard>

      {/* Slack – lower left */}
      <IconCard className="left-[24%] top-[65%]">
        <SlackLogo />
      </IconCard>

      {/* ── Sentra logo ── */}
      <IconCard className="left-[72%] top-[44%] -translate-y-1/2">
        <SentraIcon />
      </IconCard>

      {/* ── Chat bubble ── */}
      <ChatBubble className="left-[38%] top-[57%]" />
    </div>
  );
}
