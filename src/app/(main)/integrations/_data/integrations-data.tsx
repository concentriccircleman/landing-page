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
      "Connect your Google account for Sentra to automatically join meetings in your calendar.",
    icon: googleCalendarIcon,
  },
  {
    name: "Microsoft Calendar",
    description:
      "Connect your Microsoft account for Sentra to automatically join meetings in your calendar.",
    icon: microsoftCalendarIcon,
  },
  {
    name: "Gmail",
    description:
      "Connect your Gmail account to let Sentra search and analyze your emails.",
    icon: gmailIcon,
  },
  {
    name: "Outlook",
    description:
      "Connect your Outlook account to let Sentra search and analyze your emails.",
    icon: outlookIcon,
  },
  {
    name: "GitHub",
    description:
      "Connect your personal GitHub account to access your repositories and activity.",
    icon: githubIcon,
  },
  {
    name: "Google Docs",
    description: "Create, read, search, and edit Google Docs documents.",
    icon: googleDocsIcon,
  },
  {
    name: "Google Sheets",
    description:
      "Create, search, read, and update Google Sheets spreadsheets.",
    icon: googleSheetsIcon,
  },
  {
    name: "Notion",
    description: "Search, read, create, and update pages in Notion.",
    icon: notionIcon,
  },
  {
    name: "Slack",
    description:
      "Get real-time notifications about check-ins, team updates, and more directly in your Slack channels.",
    icon: slackIcon,
  },
  {
    name: "Linear",
    description:
      "Sentra will act as an app in your Linear workspace. All actions will be attributed to the Sentra app.",
    icon: linearIcon,
  },
  {
    name: "Discord",
    description:
      "Sentra will read and analyze messages from your Discord server to provide insights.",
    icon: discordIcon,
  },
];
