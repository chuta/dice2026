import { SITE } from "@/lib/constants";

export const EMAIL_BRAND = {
  logoUrl:
    process.env.EMAIL_LOGO_URL ?? `${SITE.url}/images/logos/dice-logo-2026.png`,
  logoWidth: 220,
  colors: {
    background: "#E8EDF5",
    surface: "#FFFFFF",
    header: "#050810",
    footer: "#F1F5F9",
    border: "#E2E8F0",
    text: "#0F172A",
    textMuted: "#64748B",
    textOnDark: "#F8FAFC",
    accent: "#1B6EFF",
    accentCyan: "#00B8D9",
    success: "#10B981",
    successBg: "#ECFDF5",
  },
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
} as const;
