import type { StaticImageData } from "next/image";

import googleCalendarIcon from "@/assets/icons/google-calendar.svg";
import gmailIcon from "@/assets/icons/gmail.svg";
import outlookIcon from "@/assets/icons/microsoft-outlook.svg";
import githubIcon from "@/assets/icons/github.svg";
import googleDocsIcon from "@/assets/icons/google-docs.svg";
import googleSheetsIcon from "@/assets/icons/google-sheets.svg";
import notionIcon from "@/assets/icons/notion.svg";
import slackIcon from "@/assets/icons/slack.svg";
import linearIcon from "@/assets/icons/linear.svg";
import discordIcon from "@/assets/icons/discord.svg";
import asanaIcon from "@/assets/icons/asana.svg";
import zoomIcon from "@/assets/icons/zoom.svg";
import salesforceIcon from "@/assets/icons/salesforce.svg";
import zendeskIcon from "@/assets/icons/zendesk.svg";
import intercomIcon from "@/assets/icons/intercom.svg";
import jiraIcon from "@/assets/icons/jira.svg";
import confluenceIcon from "@/assets/icons/confluence.svg";
import trelloIcon from "@/assets/icons/trello.svg";
import mondayIcon from "@/assets/icons/monday.svg";
import airtableIcon from "@/assets/icons/airtable.svg";
import miroIcon from "@/assets/icons/miro.svg";
import dropboxIcon from "@/assets/icons/dropbox.svg";
import googleDriveIcon from "@/assets/icons/google-drive.svg";
import microsoftOnedriveIcon from "@/assets/icons/microsoft-onedrive.svg";
import microsoftTeamsIcon from "@/assets/icons/microsoft-teams.svg";
import googleMeetIcon from "@/assets/icons/google-meet.svg";
import loomIcon from "@/assets/icons/loom.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import sentryIcon from "@/assets/icons/sentry.svg";
import datadogIcon from "@/assets/icons/datadog.svg";
import pagerdutyIcon from "@/assets/icons/pagerduty.svg";
import gitlabIcon from "@/assets/icons/gitlab.svg";
import bitbucketIcon from "@/assets/icons/bitbucket.svg";
import oktaIcon from "@/assets/icons/okta.svg";
import amplitudeIcon from "@/assets/icons/amplitude.svg";
import snowflakeIcon from "@/assets/icons/snowflake.svg";
import tableauIcon from "@/assets/icons/tableau.svg";
import twilioIcon from "@/assets/icons/twilio.svg";
import typeformIcon from "@/assets/icons/typeform.svg";
import newRelicIcon from "@/assets/icons/new-relic.svg";

export type IntegrationPermission =
  | "Read"
  | "Write"
  | "Read & Write"
  | "Enterprise plan";

export type IntegrationIconSize = "sm" | "md";

export interface Integration {
  name: string;
  description: string;
  icon: StaticImageData;
  permission: IntegrationPermission;
  iconSize?: IntegrationIconSize;
  isMemorySource?: boolean;
}

export const integrations: Integration[] = [
  {
    name: "Google Calendar",
    description:
      "Sentra joins your meetings and gives you structured notes, action items, and decisions — ready to search anytime.",
    icon: googleCalendarIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "Outlook Calendar",
    description:
      "Get meeting notes, action items, and decision summaries from every Outlook calendar meeting, automatically.",
    icon: outlookIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "Gmail",
    description:
      "Ask Sentra about anything in your inbox. Find commitments, follow-ups, and context across your email without digging through threads.",
    icon: gmailIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "Outlook",
    description:
      "Search across your Outlook emails naturally. Sentra helps you find what was promised, what needs follow-up, and what you missed.",
    icon: outlookIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "GitHub",
    description:
      "Bring engineering context into the picture. Sentra connects repo activity to what your team discussed in meetings and messages.",
    icon: githubIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "Google Docs",
    description:
      "Sentra agents create, search, and update Google Docs for you — turning meeting outcomes into living documentation.",
    icon: googleDocsIcon,
    permission: "Read & Write",
  },
  {
    name: "Google Sheets",
    description:
      "Sentra agents build and maintain spreadsheets for you — weekly reports, project trackers, and dashboards that stay up to date.",
    icon: googleSheetsIcon,
    permission: "Read & Write",
  },
  {
    name: "Notion",
    description:
      "Sentra agents keep your Notion workspace current — creating pages, updating docs, and syncing what your team decided into one place.",
    icon: notionIcon,
    permission: "Read & Write",
  },
  {
    name: "Slack",
    description:
      "Get weekly updates, check-ins, and helpful reminders delivered straight to your Slack channels — no extra tools needed.",
    icon: slackIcon,
    permission: "Write",
    isMemorySource: true,
  },
  {
    name: "Linear",
    description:
      "Sentra connects what your team discussed to what they are building — giving project context alongside your Linear issues.",
    icon: linearIcon,
    permission: "Read & Write",
    isMemorySource: true,
  },
  {
    name: "Discord",
    description:
      "Sentra brings your Discord conversations into your team's shared memory, so important discussions are never lost in the scroll.",
    icon: discordIcon,
    permission: "Read",
    isMemorySource: true,
  },
  {
    name: "Asana",
    description:
      "Sentra links task progress in Asana to what your team discussed, keeping priorities and context aligned across projects.",
    icon: asanaIcon,
    permission: "Enterprise plan",
    isMemorySource: true,
  },
  {
    name: "Zoom",
    description:
      "Sentra joins your Zoom meetings and delivers structured notes, action items, and decisions the moment the call ends.",
    icon: zoomIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Salesforce",
    description:
      "Sentra keeps deal context alive — linking meetings, emails, and decisions to the Salesforce records they belong to.",
    icon: salesforceIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Zendesk",
    description:
      "Bring customer conversations into your team's shared memory, so recurring issues and escalations never get lost.",
    icon: zendeskIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Intercom",
    description:
      "Sentra surfaces patterns across Intercom conversations, connecting customer signals to what your team is working on.",
    icon: intercomIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Jira",
    description:
      "Sentra ties Jira issues to the meetings and messages where they were discussed — every decision stays close to the work.",
    icon: jiraIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Confluence",
    description:
      "Sentra agents keep Confluence pages current, turning meeting outcomes into documentation your team actually trusts.",
    icon: confluenceIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Trello",
    description:
      "Give Trello boards their context back — Sentra links cards to the conversations and decisions behind them.",
    icon: trelloIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Monday",
    description:
      "Sentra connects monday.com tasks to the meetings and messages where priorities were set.",
    icon: mondayIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Airtable",
    description:
      "Sentra reads and updates Airtable bases for you — keeping structured data in sync with what your team decided.",
    icon: airtableIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Miro",
    description:
      "Sentra captures decisions from Miro sessions and connects them to the follow-ups and owners across your tools.",
    icon: miroIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Dropbox",
    description:
      "Ask Sentra about anything in your Dropbox — files, context, and who owns what, without digging through folders.",
    icon: dropboxIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Google Drive",
    description:
      "Sentra searches across your Drive naturally — finding the right doc by what was said, not just by filename.",
    icon: googleDriveIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Microsoft OneDrive",
    description:
      "Sentra brings your OneDrive content into your team's shared memory — searchable alongside everything else.",
    icon: microsoftOnedriveIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Microsoft Teams",
    description:
      "Sentra learns from your Teams channels and meetings, keeping every decision and action item within reach.",
    icon: microsoftTeamsIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Google Meet",
    description:
      "Sentra joins your Google Meet calls and delivers structured notes, action items, and decisions the moment you hang up.",
    icon: googleMeetIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Loom",
    description:
      "Sentra turns Loom recordings into structured notes and action items — searchable alongside your meetings.",
    icon: loomIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Figma",
    description:
      "Sentra connects design discussions to the Figma files they reference — keeping product context tied to the work.",
    icon: figmaIcon,
    permission: "Enterprise plan",
    iconSize: "sm",
  },
  {
    name: "Sentry",
    description:
      "Sentra links incidents in Sentry to the engineering conversations and decisions surrounding them.",
    icon: sentryIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Datadog",
    description:
      "Sentra brings Datadog alerts into the loop, connecting incidents to the teams and context that resolve them.",
    icon: datadogIcon,
    permission: "Enterprise plan",
  },
  {
    name: "PagerDuty",
    description:
      "Sentra ties PagerDuty incidents to the on-call conversations and postmortems that follow.",
    icon: pagerdutyIcon,
    permission: "Enterprise plan",
    iconSize: "sm",
  },
  {
    name: "GitLab",
    description:
      "Sentra connects GitLab activity to what your team discussed, so engineering context never lives in isolation.",
    icon: gitlabIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Bitbucket",
    description:
      "Sentra brings Bitbucket repo activity into the picture, linking commits and reviews to team discussions.",
    icon: bitbucketIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Okta",
    description:
      "Sentra respects your Okta directory, keeping access and permissions aligned with how your team is organized.",
    icon: oktaIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Amplitude",
    description:
      "Sentra connects Amplitude insights to the conversations and decisions driving your product roadmap.",
    icon: amplitudeIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Snowflake",
    description:
      "Sentra surfaces Snowflake context in meetings and messages — so data decisions happen with the right numbers in view.",
    icon: snowflakeIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Tableau",
    description:
      "Sentra links Tableau dashboards to the meetings where the metrics are reviewed — always grounded in the same source of truth.",
    icon: tableauIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Twilio",
    description:
      "Sentra keeps Twilio conversations in your team's shared memory, connecting customer touchpoints to the rest of your work.",
    icon: twilioIcon,
    permission: "Enterprise plan",
  },
  {
    name: "Typeform",
    description:
      "Sentra surfaces Typeform responses alongside the meetings and messages that acted on them.",
    icon: typeformIcon,
    permission: "Enterprise plan",
  },
  {
    name: "New Relic",
    description:
      "Sentra connects New Relic alerts to the engineering conversations that resolve them, so context travels with the incident.",
    icon: newRelicIcon,
    permission: "Enterprise plan",
  },
];
