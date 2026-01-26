"use client";

import { useState, useEffect } from "react";
import { fetchDrinks, ApiDrink } from "@/lib/api";

export function useDrinks(category: string, lang: "en" | "ar") {
  const [drinks, setDrinks] = useState<ApiDrink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDrinks() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDrinks(category, lang);
        
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