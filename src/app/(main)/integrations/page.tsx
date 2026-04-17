import type { Metadata } from "next";
import IntegrationsPage from "./_components/integrations-page";

export const metadata: Metadata = {
  title: "Integrations | Sentra",
  description:
    "Connect Sentra with the tools your team already uses — Slack, GitHub, Google Calendar, Linear, and more.",
};

export default function Page() {
  return <IntegrationsPage />;
}
