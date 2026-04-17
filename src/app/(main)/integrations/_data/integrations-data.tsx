import type { StaticImageData } from "next/image";

import googleCalendarIcon from "@/assets/icons/google-calendar.svg";
import microsoftCalendarIcon from "@/assets/icons/microsoft-calendar.svg";
import gmailIcon from "@/assets/icons/gmail.svg";
import outlookIcon from "@/assets/icons/microsoft-outlook.svg";
import githubIcon from "@/assets/icons/github.svg";
import googleDocsIcon from "@/assets/icons/google-docs.svg";
import googleSheetsIcon from "@/assets/icons/google-sheets.svg";
import notionIcon from "@/assets/icons/notion.svg";
import slackIcon from "@/assets/icons/slack.svg";
import linearIcon from "@/assets/icons/linear.svg";
import discordIcon from "@/assets/icons/discord.svg";

export interface Integration {
  name: string;
  description: string;
  icon: StaticImageData;
}

export const integrations: Integration[] = [
  {
    name: "Google Calendar",
    description:
      "Sentra joins your meetings and gives you structured notes, action items, and decisions — ready to search anytime.",
    icon: googleCalendarIcon,
  },
  {
    name: "Microsoft Calendar",
    description:
      "Get meeting notes, action items, and decision summaries from every Outlook calendar meeting, automatically.",
    icon: microsoftCalendarIcon,
  },
  {
    name: "Gmail",
    description:
      "Ask Sentra about anything in your inbox. Find commitments, follow-ups, and context across your email without digging through threads.",
    icon: gmailIcon,
  },
  {
    name: "Outlook",
    description:
      "Search across your Outlook emails naturally. Sentra helps you find what was promised, what needs follow-up, and what you missed.",
    icon: outlookIcon,
  },
  {
    name: "GitHub",
    description:
      "Bring engineering context into the picture. Sentra connects repo activity to what your team discussed in meetings and messages.",
    icon: githubIcon,
  },
  {
    name: "Google Docs",
    description:
      "Sentra agents create, search, and update Google Docs for you — turning meeting outcomes into living documentation.",
    icon: googleDocsIcon,
  },
  {
    name: "Google Sheets",
    description:
      "Sentra agents build and maintain spreadsheets for you — weekly reports, project trackers, and dashboards that stay up to date.",
    icon: googleSheetsIcon,
  },
  {
    name: "Notion",
    description:
      "Sentra agents keep your Notion workspace current — creating pages, updating docs, and syncing what your team decided into one place.",
    icon: notionIcon,
  },
  {
    name: "Slack",
    description:
      "Get weekly updates, check-ins, and helpful reminders delivered straight to your Slack channels — no extra tools needed.",
    icon: slackIcon,
  },
  {
    name: "Linear",
    description:
      "Sentra connects what your team discussed to what they are building — giving project context alongside your Linear issues.",
    icon: linearIcon,
  },
  {
    name: "Discord",
    description:
      "Sentra brings your Discord conversations into your team's shared memory, so important discussions are never lost in the scroll.",
    icon: discordIcon,
  },
];
