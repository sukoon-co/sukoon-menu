"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { cardVariants } from "@/lib/animations";
import type { Category } from "@/lib/menu-data";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const { t, locale } = useLocale();

  const categoryName =
    t.categoryNames[category.id as keyof typeof t.categoryNames] || category.id;
  const categoryDescription =
    t.categoryDescriptions[category.id as keyof typeof t.categoryDescriptions] ||
    "";

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/drinks/${category.slug}`}
        className="group relative block overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={categoryName}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={categoryName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-serif font-semibold text-white mb-1 text-balance">
            {categoryName}
          </h3>
          <p className="text-sm text-white/80">{categoryDescription}</p>
        </div>

        <div className="absolute top-4 end-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary text-primary-foreground rounded-full p-2">
            <svg
              className={`h-4 w-4 ${locale === "ar" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
