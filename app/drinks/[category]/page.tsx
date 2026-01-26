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

interface DrinksPageProps {
  params: Promise<{ category: string }>;
}

export default function DrinksPage({ params }: DrinksPageProps) {
  const resolvedParams = use(params);
  const { t, locale, dir } = useLocale();
  const { drinks, loading, error } = useDrinks(resolvedParams.category, locale);

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
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowIcon className="h-4 w-4" />
              <span>{t.drinks.backToMenu}</span>
            </Link>
          </Button>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            {resolvedParams.category}
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
          ) : (
            drinks.map((drink, index) => (
              <ApiDrinkCard key={drink.id} drink={drink} index={index} />
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
