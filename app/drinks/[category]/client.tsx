"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { useSubCategories } from "@/hooks/use-subcategories";
import { fadeInUp, cardVariants } from "@/lib/animations";
import { Header } from "@/components/layout/header";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDriveImageUrl } from "@/lib/drive-utils";

interface DrinksPageClientProps {
  params: Promise<{ category: string }>;
}

export default function DrinksPageClient({ params }: DrinksPageClientProps) {
  const resolvedParams = use(params);
  const { t, locale, dir } = useLocale();
  const { subCategories, loading, error } = useSubCategories(
    resolvedParams.category,
    locale
  );

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
            {t.subCategories.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-[4/3] bg-muted rounded-2xl mb-4"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-destructive mb-2">Failed to load sub-categories</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : subCategories.length === 0 ? (
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
                      d="M4 7h16M4 12h16M4 17h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No sub-categories yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Please check back soon or choose another category.
                </p>
                <Button asChild size="sm" className="mt-5">
                  <Link href="/">Back to Categories</Link>
                </Button>
              </div>
            </div>
          ) : (
            subCategories.map((subCategory, index) => (
              <motion.div
                key={subCategory.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/drinks/${resolvedParams.category}/${subCategory.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={subCategory.name}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={getDriveImageUrl(subCategory.image) || "/placeholder.svg"}
                      alt={subCategory.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-xl font-serif font-semibold text-white mb-1 text-balance">
                      {subCategory.name}
                    </h3>
                    <p className="text-sm text-white/80">{subCategory.subTitle}</p>
                  </div>
                </Link>
              </motion.div>
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
