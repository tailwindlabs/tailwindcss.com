import { Page, Step, Tab, Tile } from "./utils";

export interface Guide {
  page: Page;
  slug: string;
  tile: Tile;
  steps: Step[];
  tabs?: Tab[];
}

const guides: Guide[] = await create({
  nextjs: () => import("./nextjs"),
  laravel: () => import("./laravel"),
  nuxt: () => import("./nuxtjs"),
  solidjs: () => import("./solidjs"),
  sveltekit: () => import("./sveltekit"),
  gatsby: () => import("./gatsby"),
  angular: () => import("./angular"),
  "ruby-on-rails": () => import("./ruby-on-rails"),
  "react-router": () => import("./react-router"),
  "tanstack-start": () => import("./tanstack-start"),
  phoenix: () => import("./phoenix"),
  parcel: () => import("./parcel"),
  symfony: () => import("./symfony"),
  meteor: () => import("./meteor"),
  adonisjs: () => import("./adonisjs"),
  emberjs: () => import("./emberjs"),
  astro: () => import("./astro"),
  qwik: () => import("./qwik"),
  rspack: () => import("./rspack"),
});

async function create(list: Record<string, () => Promise<any>>): Promise<Guide[]> {
  return await Promise.all(
    Object.entries(list).map(async ([slug, mod]) => {
      return Object.create(await mod(), {
        slug: { value: slug },
      });
    }),
  );
}

export async function loadGuide(slug: string): Promise<Guide | null> {
  return guides.find((guide) => guide.slug === slug) ?? null;
}

export async function loadGuides(): Promise<Guide[]> {
  return Object.values(guides);
}
