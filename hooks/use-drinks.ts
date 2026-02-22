"use client";

import { useState, useEffect } from "react";
import { ApiDrink, ApiResponse } from "@/lib/api";

export function useDrinks(category: string, lang: "en" | "ar") {
  const [drinks, setDrinks] = useState<ApiDrink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDrinks() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/data/drinks-${category}-${lang}.json`);
        const data: ApiResponse<ApiDrink> = await res.json();
        setDrinks(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load drinks");
      } finally {
        setLoading(false);
      }
    }

    loadDrinks();
  }, [category, lang]);

  return { drinks, loading, error };
}