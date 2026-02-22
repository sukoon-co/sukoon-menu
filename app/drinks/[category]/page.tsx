import { readFileSync } from "fs";
import { join } from "path";
import DrinksPageClient from "./client";

interface Manifest {
  categories: number[];
  routes: { category: string; subCategory: string }[];
}

export async function generateStaticParams() {
  const manifest: Manifest = JSON.parse(
    readFileSync(join(process.cwd(), "public/data/manifest.json"), "utf-8")
  );
  return manifest.categories.map((id) => ({ category: String(id) }));
}

export default function DrinksPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return <DrinksPageClient params={params} />;
}
