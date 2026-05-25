import { partners, ambassadors, supporters } from "@/app/partners/sponsors";

type PartnerSponsor = (typeof partners)[number];
type AmbassadorSponsor = (typeof ambassadors)[number];
type SupporterSponsor = (typeof supporters)[number];

export type Sponsor = PartnerSponsor | AmbassadorSponsor;

export type DirectorySponsor = (PartnerSponsor | AmbassadorSponsor | SupporterSponsor) & {
  tier: "partner" | "ambassador" | "supporter";
};

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getHomepageSponsors() {
  const totalLogos = 40;
  const shuffledPartners = shuffle(partners);

  if (shuffledPartners.length >= totalLogos) {
    return shuffledPartners.slice(0, totalLogos);
  }

  const remainingSlots = totalLogos - shuffledPartners.length;
  const shuffledAmbassadors = shuffle(ambassadors);

  return [...shuffledPartners, ...shuffledAmbassadors.slice(0, remainingSlots)];
}

export const directoryCategories = [
  "All",
  "AI Code Editors",
  "AI App Builders",
  "AI Code Review",
  "AI Platforms",
  "Foundation Models",
  "Vertical AI",
  "Browsers",
  "Hosting",
  "Monitoring",
  "Databases",
  "Auth",
  "Email",
  "Media APIs",
  "Developer Tools",
  "Documentation",
  "CMS & Editors",
  "Commerce",
  "Agencies",
  "Other",
] as const;

export function getDirectorySponsors(): DirectorySponsor[] {
  const tierOrder = { partner: 0, ambassador: 1, supporter: 2 };
  const all: DirectorySponsor[] = [
    ...partners.filter((s) => s.directory).map((s) => ({ ...s, tier: "partner" as const })),
    ...ambassadors.filter((s) => s.directory).map((s) => ({ ...s, tier: "ambassador" as const })),
    ...supporters.filter((s) => s.directory).map((s) => ({ ...s, tier: "supporter" as const })),
  ];
  return all.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);
}
