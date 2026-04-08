import Image, { type ImageProps } from "next/image";
import unifiedKnowledgeImage from "@/assets/illustrations/unified-knowledge.svg";
import alignmentImage from "@/assets/illustrations/alignment.svg";
import misalignmentRadarImage from "@/assets/illustrations/misalignment-radar.svg";
import alwaysWorkingImage from "@/assets/illustrations/always-working.svg";
import meetingsImage from "@/assets/illustrations/meetings.svg";
import remindersImage from "@/assets/illustrations/reminders.svg";
import actionLogImage from "@/assets/illustrations/action-log.svg";
import onboardingImage from "@/assets/illustrations/onboarding.svg";
import TaskListAnimation from "./task-list-animation";
interface Feature {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: ImageProps["src"];
  imageAlt: string;
  icon: React.ReactNode;
  animation?: React.ReactNode;
  isNew?: boolean;
  frameless?: boolean;
}

const FEATURES: Feature[] = [
  {
    id: "unified-memory",
    label: "Unified Memory",
    title: "A complete history of every decision",
    description:
      "Sentra keeps track of how your company evolves by building a living timeline of decisions and commitments. Every meeting, conversation, and document is captured — so anyone on your team can find the answers they need.",
    imageSrc: unifiedKnowledgeImage,
    imageAlt: "Unified knowledge timeline visualization",
    animation: undefined,
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 5h16" />
      </svg>
    ),
  },
  {
    id: "meeting-notes",
    label: "Meeting Notes",
    title: "Smarter meeting notes, free forever",
    description:
      "Sentra automatically captures, structures, and enriches your meeting notes in real time. Key decisions, action items, and context are surfaced instantly — so your team stays aligned without lifting a finger.",
    imageSrc: meetingsImage,
    imageAlt: "Auto meeting notes placeholder",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: "risk-detection",
    label: "Risk Detection",
    title: "Spot problems before they grow",
    description:
      "Sentra watches for conflicting priorities, missed commitments, and communication gaps across your company — and flags them before they turn into bigger issues.",
    imageSrc: misalignmentRadarImage,
    imageAlt: "Risk detection radar visualization",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: "business-reviews",
    label: "Business Reviews",
    title: "Weekly updates, written for you",
    description:
      "Stop chasing status reports. Just ask Sentra and get a clear summary of what happened across your team this week — ready to share in minutes, not hours.",
    imageSrc: alwaysWorkingImage,
    imageAlt: "Always working status visualization",
    animation: <TaskListAnimation />,
    frameless: true,
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "job-assignments",
    label: "Agents",
    title: "Agents that do the work for you",
    description:
      "Set up agents that handle the busywork — daily briefings, custom reports, meeting prep, or nudges when something needs your attention. You define the job, Sentra takes care of the rest.",
    imageSrc: actionLogImage,
    imageAlt: "Action log visualization",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const TAB_H = 30;
const NAV_H = 80;
const TOP_GAP = 40;
const STICKY_TOP = NAV_H + TOP_GAP;
const SIDE_PAD = "var(--folder-side-pad)";
const SCROLL_DWELL = 20;
const SCROLL_DWELL_LAST = 20;

const SHADOW_OFFSET = 10;
const BODY_H_OFFSET = "var(--folder-body-offset)";

const MARK = 10;
const MARK_COLOR = "#c4c4c8";

function CornerMarks() {
  const b = MARK_COLOR;
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <span style={{ position: "absolute", top: 8, left: 8, width: MARK, height: 1, background: b }} />
      <span style={{ position: "absolute", top: 8, left: 8, width: 1, height: MARK, background: b }} />
      <span style={{ position: "absolute", top: 8, right: 8, width: MARK, height: 1, background: b }} />
      <span style={{ position: "absolute", top: 8, right: 8, width: 1, height: MARK, background: b }} />
      <span style={{ position: "absolute", bottom: 8, left: 8, width: MARK, height: 1, background: b }} />
      <span style={{ position: "absolute", bottom: 8, left: 8, width: 1, height: MARK, background: b }} />
      <span style={{ position: "absolute", bottom: 8, right: 8, width: MARK, height: 1, background: b }} />
      <span style={{ position: "absolute", bottom: 8, right: 8, width: 1, height: MARK, background: b }} />
    </div>
  );
}

function FeatureCard({ features, index }: { features: Feature[]; index: number }) {
  const feature = features[index];
  const isLast = index === features.length - 1;
  const dwell = isLast ? SCROLL_DWELL_LAST : SCROLL_DWELL;

  return (
    <div
      className="sticky w-full"
      style={{
        top: STICKY_TOP,
        height: `calc(100vh - ${STICKY_TOP}px + ${dwell}vh)`,
        zIndex: index + 1,
      }}
    >
      <div
        className="flex items-end relative z-20"
        style={{ height: TAB_H, padding: `0 ${SIDE_PAD}`, marginBottom: -1 }}
      >
        {features.slice(0, index + 1).map((f, i) => {
          const isCurrent = i === index;
          return (
            <div
              key={f.id}
              className="flex items-center gap-1.5 px-2 sm:px-3 shrink-0"
              style={{
                height: TAB_H - 2,
                visibility: isCurrent ? "visible" : "hidden",
                background: "#f8f8f8",
                borderTop: "1px solid #d4d4d8",
                borderLeft: "1px solid #d4d4d8",
                borderRight: "1px solid #d4d4d8",
                borderBottom: "1px solid #f8f8f8",
                borderRadius: "4px 4px 0 0",
                marginLeft: i > 0 ? -1 : 0,
              }}
            >
              <span className="text-[10px] font-mono whitespace-nowrap text-[#a1a1aa]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline text-[10px] uppercase tracking-[0.1em] font-medium whitespace-nowrap text-[#52525b]">
                {f.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Card body */}
      <div
        className="relative"
        style={{
          height: `calc(100vh - ${STICKY_TOP + TAB_H + SHADOW_OFFSET}px - ${BODY_H_OFFSET})`,
          margin: `0 ${SIDE_PAD}`,
        }}
      >
        {index === 0 && (
          <div
            className="absolute pointer-events-none"
            style={{
              top: SHADOW_OFFSET,
              left: SHADOW_OFFSET,
              width: "100%",
              height: "100%",
              zIndex: 0,
              borderRadius: 4,
              background: `repeating-linear-gradient(
                45deg,
                #b4b4ba,
                #b4b4ba 1px,
                transparent 1px,
                transparent 6px
              )`,
            }}
            aria-hidden="true"
          />
        )}
        <div className="overflow-hidden relative h-full z-10" style={{ background: "#f8f8f8", border: "1px solid #d4d4d8", borderRadius: 4 }}>
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #d4d4d8 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
              opacity: 0.4,
            }}
          />
          <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 h-full flex items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full py-8">
              <div className="relative flex flex-col justify-center md:w-[42%] shrink-0">
                <span
                  className="absolute -top-6 -left-2 select-none pointer-events-none font-semibold tabular-nums text-[72px] sm:text-[120px]"
                  style={{
                    lineHeight: 1,
                    color: "rgba(0,0,0,0.025)",
                    letterSpacing: "-0.04em",
                  }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-brand flex items-center justify-center rounded-sm">
                      {feature.icon}
                    </div>
                    {feature.isNew && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-brand bg-white px-2.5 py-1 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04),0_4px_12px_rgba(37,99,235,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]">
                        <svg className="w-2.5 h-2.5 -translate-y-[0.5px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tighter text-[#1a1a1f] leading-[1.15] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-[#71717a] leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
                <div
                  className="hidden md:flex items-center gap-2 mt-8"
                  aria-hidden="true"
                >
                  {features.map((_, pi) => (
                    <span
                      key={pi}
                      style={{
                        width: pi === index ? 16 : 4,
                        height: 2,
                        borderRadius: 1,
                        background: pi === index ? "#2563eb" : "#d4d4d8",
                        transition: "width 0.3s, background 0.3s",
                      }}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-[#a1a1aa] ml-1.5">
                    {String(index + 1).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                {feature.animation ? (
                  feature.frameless ? (
                    <div className="relative w-full flex items-center justify-center overflow-visible py-4">
                      {feature.animation}
                    </div>
                  ) : (
                    <div className="relative w-full aspect-square max-h-[520px] bg-white border border-[#d4d4d8] overflow-hidden rounded-sm">
                      {feature.animation}
                      <CornerMarks />
                    </div>
                  )
                ) : (
                  <div className="relative w-full aspect-[4/3] max-h-[480px] bg-white border border-[#d4d4d8] flex items-center justify-center p-8 md:p-12 rounded-sm">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-auto max-h-[360px] object-contain"
                    />
                    <CornerMarks />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <section className="relative" style={{ background: "#f8f8f8", marginBottom: `-${SCROLL_DWELL_LAST}vh` }}>
      {FEATURES.map((_, i) => (
        <FeatureCard key={FEATURES[i].id} features={FEATURES} index={i} />
      ))}
    </section>
  );
}
