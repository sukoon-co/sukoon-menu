"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/animations";
import { getDriveImageUrl } from "@/lib/drive-utils";
import type { ApiDrink } from "@/lib/api";

interface ApiDrinkCardProps {
  drink: ApiDrink;
  index?: number;
}

export function ApiDrinkCard({ drink, index = 0 }: ApiDrinkCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={drink.image || "/placeholder.svg"}
          alt={drink.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-lg font-serif font-semibold text-white mb-1">
          {drink.name}
        </h3>
        <p className="text-sm text-white/80 mb-2 line-clamp-2">
          {drink.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">
            {drink.price} SAR
          </span>
        </div>
      </div>
    </motion.div>
  );
}