import { SITE } from "@/lib/constants";
import { EMAIL_BRAND } from "@/lib/email/brand";
import { escapeHtml } from "@/lib/email/utils";

interface EmailLayoutOptions {
  preheader?: string;
  body: string;
  footerNote?: string;
}

export function renderEmailLayout({ preheader, body, footerNote }: EmailLayoutOptions) {
  const { colors, fonts, logoUrl, logoWidth } = EMAIL_BRAND;

  const preheaderHtml = preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>`
    : "";

  const footerExtra = footerNote
    ? `<p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:${colors.textMuted};">${footerNote}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${escapeHtml(SITE.name)}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${colors.background};font-family:${fonts.sans};-webkit-font-smoothing:antialiased;">
  ${preheaderHtml}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${colors.background};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:${colors.surface};border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(5,8,16,0.08);">
          <!-- Header -->
          <tr>
            <td align="center" style="background:linear-gradient(180deg, ${colors.header} 0%, #0A1020 100%);padding:36px 40px 32px;">
              <a href="${SITE.url}" style="text-decoration:none;">
                <img src="${logoUrl}" alt="${escapeHtml(SITE.name)}" width="${logoWidth}" style="display:block;margin:0 auto;max-width:${logoWidth}px;width:100%;height:auto;border:0;" />
              </a>
              <p style="margin:18px 0 0;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${colors.accentCyan};">
                ${escapeHtml(SITE.date)} · Lagos, Nigeria
              </p>
              <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:rgba(248,250,252,0.72);">
                ${escapeHtml(SITE.tagline)}
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;color:${colors.text};font-size:16px;line-height:1.65;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${colors.footer};padding:28px 40px;border-top:1px solid ${colors.border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:13px;line-height:1.6;color:${colors.textMuted};">
                    <strong style="color:${colors.text};">${escapeHtml(SITE.fullName)}</strong><br />
                    ${escapeHtml(SITE.venue)} · ${escapeHtml(SITE.venueAddress)}<br />
                    Organized by ${escapeHtml(SITE.organizer)}
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;font-size:13px;color:${colors.textMuted};">
                    <a href="${SITE.url}" style="color:${colors.accent};text-decoration:none;font-weight:600;">${SITE.url.replace("https://", "")}</a>
                    &nbsp;·&nbsp;
                    <a href="mailto:${SITE.email}" style="color:${colors.accent};text-decoration:none;">${SITE.email}</a>
                  </td>
                </tr>
                ${footerExtra}
              </table>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:11px;line-height:1.5;color:${colors.textMuted};max-width:600px;">
          You received this email because you interacted with ${escapeHtml(SITE.name)}.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderDetailRow(label: string, value: string, options?: { mono?: boolean; highlight?: boolean }) {
  const { colors, fonts } = EMAIL_BRAND;
  const valueStyle = [
    `margin:0;font-size:15px;line-height:1.5;color:${options?.highlight ? colors.accent : colors.text};`,
    options?.mono ? `font-family:${fonts.mono};font-size:14px;` : "font-weight:600;",
  ].join("");

  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${colors.border};vertical-align:top;">
        <p style="margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${colors.textMuted};">${escapeHtml(label)}</p>
        <p style="${valueStyle}">${escapeHtml(value)}</p>
      </td>
    </tr>`;
}

export function renderDetailsCard(rows: string) {
  const { colors } = EMAIL_BRAND;
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;background-color:${colors.footer};border-radius:12px;border:1px solid ${colors.border};">
      <tr>
        <td style="padding:8px 20px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${rows}
          </table>
        </td>
      </tr>
    </table>`;
}

export function renderCtaButton(label: string, href: string) {
  const { colors } = EMAIL_BRAND;
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;">
      <tr>
        <td align="center" style="border-radius:10px;background:linear-gradient(135deg, ${colors.accent} 0%, #0052CC 100%);">
          <a href="${href}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:10px;">
            ${escapeHtml(label)} →
          </a>
        </td>
      </tr>
    </table>`;
}

export function renderSuccessBadge(label: string) {
  const { colors } = EMAIL_BRAND;
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
      <tr>
        <td style="background-color:${colors.successBg};border:1px solid rgba(16,185,129,0.25);border-radius:999px;padding:8px 16px;">
          <span style="font-size:13px;font-weight:600;color:${colors.success};letter-spacing:0.02em;">✓&nbsp; ${escapeHtml(label)}</span>
        </td>
      </tr>
    </table>`;
}

export function renderHeading(text: string) {
  const { colors } = EMAIL_BRAND;
  return `<h1 style="margin:0 0 16px;font-size:26px;font-weight:700;line-height:1.25;color:${colors.text};letter-spacing:-0.02em;">${escapeHtml(text)}</h1>`;
}

export function renderParagraph(text: string) {
  const { colors } = EMAIL_BRAND;
  return `<p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:${colors.text};">${text}</p>`;
}
