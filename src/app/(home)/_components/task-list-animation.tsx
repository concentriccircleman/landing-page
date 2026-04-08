"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

interface TaskItem {
  label: string;
  assignee: string;
  avatarSrc: string;
  status: "done" | "pending" | "active";
}

const TASKS: TaskItem[] = [
  {
    label: "Create high-fidelity mockups for the AI v...",
    assignee: "Jesse",
    avatarSrc: "https://i.pravatar.cc/80?img=11",
    status: "done",
  },
  {
    label: "Design the initial user setup and consent...",
    assignee: "Samira",
    avatarSrc: "https://i.pravatar.cc/80?img=47",
    status: "done",
  },
  {
    label: "Analyze user feedback from the latest be...",
    assignee: "Ben",
    avatarSrc: "https://i.pravatar.cc/80?img=68",
    status: "pending",
  },
  {
    label: "Visualize the 'organizational map' dashbo...",
    assignee: "Eric",
    avatarSrc: "https://i.pravatar.cc/80?img=12",
    status: "pending",
  },
  {
    label: "Prototype anonymous reporting feature",
    assignee: "Maria",
    avatarSrc: "https://i.pravatar.cc/80?img=32",
    status: "active",
  },
];

interface BubbleItem {
  name: string;
  avatarSrc: string;
  text: string;
}

const BUBBLES: BubbleItem[] = [
  { name: "Jesse", avatarSrc: "https://i.pravatar.cc/80?img=11", text: "\u201cMake a new...\u201d" },
  { name: "Ben", avatarSrc: "https://i.pravatar.cc/80?img=68", text: "\u201cWhat did Infra Inc. say about...\u201d" },
  { name: "Samira", avatarSrc: "https://i.pravatar.cc/80?img=47", text: "\u201cWhat is the...\u201d" },
];

const BUBBLE_POSITIONS = [
  { left: "2%", top: 0 },
  { left: "30%", top: 4 },
  { left: "14%", top: 52 },
];

const ROW_EASE = [0.4, 0, 0.2, 1] as const;

const CheckDone = () => (
  <svg className="shrink-0 w-4 h-4 sm:w-[22px] sm:h-[22px]" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="#2563eb" />
    <path d="M7 11.5L9.5 14L15 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckPending = () => (
  <svg className="shrink-0 w-4 h-4 sm:w-[22px] sm:h-[22px]" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" stroke="#2563eb" strokeWidth="1.5" fill="none" />
  </svg>
);

const CheckActive = () => (
  <svg className="shrink-0 w-4 h-4 sm:w-[22px] sm:h-[22px]" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" stroke="#2563eb" strokeWidth="1.5" fill="rgba(37, 99, 235, 0.08)" />
  </svg>
);

const SentraIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" opacity="0.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" opacity="0.5" />
  </svg>
);

const Avatar = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <span
    className={cn(
      "flex items-center justify-center shrink-0 overflow-hidden bg-white",
      className,
    )}
    style={{
      borderRadius: "50%",
      padding: 1,
      boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)",
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      className="block w-full h-full object-cover"
      style={{ borderRadius: "50%" }}
    />
  </span>
);

const CheckIcon = ({ status }: { status: TaskItem["status"] }) => {
  if (status === "done") return <CheckDone />;
  if (status === "active") return <CheckActive />;
  return <CheckPending />;
};

const TaskRow = ({ task, index }: { task: TaskItem; index: number }) => (
  <motion.li
    className="flex items-center gap-2 sm:gap-3 cursor-default px-3 py-1.5 sm:px-5 sm:py-2.5"
    initial={{ opacity: 0, x: -6 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, ease: ROW_EASE, delay: 0.15 + index * 0.08 }}
  >
    <CheckIcon status={task.status} />
    <span
      className={cn(
        "flex-1 text-xs sm:text-sm leading-[1.4] whitespace-nowrap overflow-hidden text-ellipsis",
        task.status === "done" && "text-[#a1a1aa] line-through decoration-[#e4e4e7]",
        task.status === "active" && "font-medium text-foreground",
        task.status === "pending" && "text-foreground",
      )}
    >
      {task.label}
    </span>
    <span className="shrink-0 flex items-center gap-1.5 sm:gap-2">
      <span
        className={cn(
          "hidden s:inline text-xs whitespace-nowrap",
          task.status === "done" ? "text-[#a1a1aa]" : "text-muted",
        )}
      >
        {task.assignee}
      </span>
      <Avatar src={task.avatarSrc} alt={task.assignee} className="w-6 h-6 sm:w-8 sm:h-8" />
    </span>
  </motion.li>
);

const TaskListAnimation = () => (
  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto origin-top md:scale-75 lg:scale-90">
    <motion.div
      className="relative bg-white overflow-visible"
      style={{
        borderRadius: 16,
        boxShadow:
          "0 16px 48px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: ROW_EASE }}
    >
      <div className="overflow-hidden" style={{ borderRadius: 16 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 pt-3 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
          <span className="text-xs sm:text-[15px] font-semibold text-foreground" style={{ letterSpacing: "-0.01em" }}>
            Sprint Tasks
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="inline-flex items-center gap-1 h-6 px-2 sm:h-8 sm:px-3.5 text-[11px] sm:text-[13px] font-medium text-foreground bg-white cursor-default whitespace-nowrap"
              style={{
                borderRadius: 6,
                boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)",
              }}
            >
              + Filter
            </span>
            <span
              className="inline-flex items-center gap-1 h-6 px-2 sm:h-8 sm:px-3.5 text-[11px] sm:text-[13px] font-medium text-white bg-brand cursor-default whitespace-nowrap"
              style={{
                borderRadius: 6,
                boxShadow:
                  "inset 0 0.5px 0 rgba(255,255,255,0.1), 0 0 0 1px #1e40af, 0 1px 1px rgba(0,0,0,0.18)",
              }}
            >
              + New Task
            </span>
          </div>
        </div>

        {/* Task rows */}
        <ul className="list-none pb-0.5 sm:pb-1">
          {TASKS.map((task, index) => (
            <TaskRow key={task.assignee} task={task} index={index} />
          ))}
        </ul>

        {/* Sentra bar */}
        <div
          className="flex items-center gap-1.5 sm:gap-2 border-t border-[#efeff0] px-3 py-2 sm:px-5 sm:py-2.5"
          style={{
            background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
            borderRadius: "0 0 16px 16px",
          }}
        >
          <SentraIcon />
          <span className="text-[11px] sm:text-[13px] font-semibold text-foreground" style={{ letterSpacing: "-0.01em" }}>
            Sentra
          </span>
        </div>
      </div>

      {/* Toast — hidden on small screens */}
      <motion.div
        className="hidden sm:flex absolute right-3 sm:right-5 items-start gap-2 bg-white z-10"
        style={{
          bottom: -30,
          padding: 12,
          borderRadius: 6,
          boxShadow:
            "0 8px 16px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.08)",
          width: 260,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: ROW_EASE, delay: 0.9 }}
      >
        <span className="shrink-0 w-5 h-5 flex items-center justify-center text-[#16a34a]">
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.12" />
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
            <path d="M5 8.5L7 10.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium text-foreground leading-5">Task completed</div>
          <div className="text-[13px] text-secondary leading-5">Consent flow mockups approved by team.</div>
        </div>
        <span className="shrink-0 w-5 h-5 flex items-center justify-center text-muted cursor-default">
          <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3.5 3.5L10.5 10.5" />
            <path d="M10.5 3.5L3.5 10.5" />
          </svg>
        </span>
      </motion.div>
    </motion.div>

    {/* Chat bubbles — hidden below md */}
    <div className="hidden md:block relative h-24 mt-10">
      {BUBBLES.map((bubble, index) => (
        <motion.div
          key={bubble.name}
          className="absolute inline-flex items-center gap-1.5 bg-white whitespace-nowrap"
          style={{
            left: BUBBLE_POSITIONS[index].left,
            top: BUBBLE_POSITIONS[index].top,
            borderRadius: 999,
            padding: "5px 14px 5px 5px",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.08)",
          }}
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: ROW_EASE, delay: 1.1 + index * 0.2 }}
        >
          <Avatar src={bubble.avatarSrc} alt={bubble.name} className="w-6 h-6" />
          <span className="text-[11px] font-medium text-foreground">{bubble.name}</span>
          <span className="text-[11px] text-muted">{bubble.text}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TaskListAnimation;
