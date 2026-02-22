import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbzuq8eTzsNm0lPEuIUbVZUUomnnS188-QbRx6ekAUu57QF70Z54Jkf-AQZW2ZaiMQSx/exec";

const DATA_DIR = join(process.cwd(), "public", "data");

async function fetchJson(url) {
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return JSON.parse(text);
}

async function main() {
  console.log("Fetching menu data from API...\n");

  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  const manifest = { categories: [], routes: [] };

  // 1. Fetch categories for both languages
  for (const lang of ["en", "ar"]) {
    const data = await fetchJson(
      `${BASE_URL}?action=categories&lang=${lang}`
    );
    writeFileSync(
      join(DATA_DIR, `categories-${lang}.json`),
      JSON.stringify(data)
    );
    console.log(
      `  categories-${lang}.json (${data.data?.length || 0} items)`
    );

    if (lang === "en" && data.data) {
      manifest.categories = data.data.map((c) => c.id);
    }
  }

  // 2. Fetch subcategories for each category
  for (const categoryId of manifest.categories) {
    for (const lang of ["en", "ar"]) {
      const data = await fetchJson(
        `${BASE_URL}?action=subCategories&parentId=${categoryId}&lang=${lang}`
      );
      writeFileSync(
        join(DATA_DIR, `subcategories-${categoryId}-${lang}.json`),
        JSON.stringify(data)
      );
      console.log(
        `  subcategories-${categoryId}-${lang}.json (${data.data?.length || 0} items)`
      );

      if (lang === "en" && data.data) {
        for (const sub of data.data) {
          manifest.routes.push({
            category: String(categoryId),
            subCategory: String(sub.id),
          });
        }
      }
    }
  }

  // 3. Fetch drinks for each subcategory
  const subCategoryIds = [
    ...new Set(manifest.routes.map((r) => r.subCategory)),
  ];
  for (const subCategoryId of subCategoryIds) {
    for (const lang of ["en", "ar"]) {
      const data = await fetchJson(
        `${BASE_URL}?action=drinks&categoryId=${subCategoryId}&lang=${lang}`
      );
      writeFileSync(
        join(DATA_DIR, `drinks-${subCategoryId}-${lang}.json`),
        JSON.stringify(data)
      );
      console.log(
        `  drinks-${subCategoryId}-${lang}.json (${data.data?.length || 0} items)`
      );
    }
  }

  // 4. Write manifest (used by generateStaticParams at build time)
  writeFileSync(
    join(DATA_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("  manifest.json");

  console.log("\nDone! All data fetched and saved to public/data/");
}

main().catch((err) => {
  console.error("Failed to fetch data:", err);
  process.exit(1);
});
