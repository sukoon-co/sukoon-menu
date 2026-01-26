"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { cardVariants } from "@/lib/animations";
import type { Drink } from "@/lib/menu-data";

interface DrinkCardProps {
  drink: Drink;
  index?: number;
}

export function DrinkCard({ drink, index = 0 }: DrinkCardProps) {
  const { t, locale } = useLocale();

  const name = drink.name[locale as keyof typeof drink.name];
  const description = drink.description[locale as keyof typeof drink.description];

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.08 }}
      className="group bg-card rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={drink.image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {drink.tags.length > 0 && (
          <div className="absolute top-3 start-3 flex flex-wrap gap-1.5">
            {drink.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                  tag === "new"
                    ? "bg-secondary text-secondary-foreground"
                    : tag === "hot"
                      ? "bg-orange-500 text-white"
                      : "bg-sky-500 text-white"
                }`}
              >
                {t.drinks.tags[tag]}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-card-foreground mb-1 text-balance">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            {drink.price} <span className="text-sm font-normal">SAR</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
