"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { useDrinks } from "@/hooks/use-drinks";
import { fadeInUp } from "@/lib/animations";
import { Header } from "@/components/layout/header";
import { ApiDrinkCard } from "@/components/cards/api-drink-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubCategoryPageClientProps {
  params: Promise<{ category: string; subCategory: string }>;
}

export default function SubCategoryPageClient({ params }: SubCategoryPageClientProps) {
  const resolvedParams = use(params);
  const { t, locale, dir } = useLocale();
  const { drinks, loading, error } = useDrinks(resolvedParams.subCategory, locale);

  const ArrowIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowIcon className="h-4 w-4" />
                <span>{t.drinks.backToMenu}</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Link
                href={`/drinks/${resolvedParams.category}`}
                className="flex items-center gap-2"
              >
                <ArrowIcon className="h-4 w-4" />
                <span>{t.subCategories.back}</span>
              </Link>
            </Button>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            {t.drinks.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-square bg-muted rounded-2xl mb-4"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-destructive mb-2">Failed to load drinks</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : drinks.length === 0 ? (
            <div className="col-span-full">
              <div className="rounded-2xl border border-dashed border-muted-foreground/30 bg-card/50 px-6 py-12 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7h10M5 11h14M8 15h8M10 19h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No drinks available</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  This category is empty for now. Try another one.
                </p>
                <Button asChild size="sm" className="mt-5">
                  <Link href={`/drinks/${resolvedParams.category}`}>Back to Sub-Categories</Link>
                </Button>
              </div>
            </div>
          ) : (
            drinks.map((drink, index) => (
              <ApiDrinkCard key={drink.id} drink={drink} index={index} />
            ))
          )}
        </div>

        {/* <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {t.brand} &middot; {t.tagline}
          </p>
        </footer> */}
      </main>
    </div>
  );
}
