import { readFileSync } from "fs";
import { join } from "path";
import SubCategoryPageClient from "./client";

interface Manifest {
  categories: number[];
  routes: { category: string; subCategory: string }[];
}

export async function generateStaticParams() {
  const manifest: Manifest = JSON.parse(
    readFileSync(join(process.cwd(), "public/data/manifest.json"), "utf-8")
  );
  return manifest.routes.map((r) => ({
    category: r.category,
    subCategory: r.subCategory,
  }));
}

export default function DrinksPage({
  params,
}: {
  params: Promise<{ category: string; subCategory: string }>;
}) {
  return <SubCategoryPageClient params={params} />;
}
