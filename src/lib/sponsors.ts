import { partners, ambassadors, supporters } from "@/app/sponsor/sponsors";

export type Sponsor = (typeof partners)[number];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getShuffledSponsors() {
  return {
    partners: shuffle(partners),
    ambassadors: shuffle(ambassadors),
    supporters: shuffle(supporters),
  };
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
