"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { ApiCategoryCard } from "@/components/cards/api-category-card";
import { useCategories } from "@/hooks/use-categories";
import { useLocale } from "@/lib/locale-context";
import { fadeInUp } from "@/lib/animations";

export default function CategoriesPage() {
  const { t, dir, locale } = useLocale();
  const { categories, loading, error } = useCategories(locale);

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 text-balance">
            {t.categories.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {t.categories.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-[4/3] bg-muted rounded-2xl mb-4"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-destructive mb-2">Failed to load categories</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : (
            categories?.map((category, index) => (
              <ApiCategoryCard key={category.id} category={category} index={index} />
            ))
          )}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {t.brand} &middot; {t.tagline}
          </p>
        </footer>
      </main>
    </div>
  );
}
