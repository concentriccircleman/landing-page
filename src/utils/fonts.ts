import { IBM_Plex_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({ subsets: ["latin"] });

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});
