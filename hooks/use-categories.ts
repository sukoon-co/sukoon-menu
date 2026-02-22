"use client";

import { useState, useEffect } from "react";
import { ApiCategory, ApiResponse } from "@/lib/api";

export function useCategories(lang: "en" | "ar") {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/data/categories-${lang}.json`);
        const data: ApiResponse<ApiCategory> = await res.json();
        setCategories(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load categories");
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, [lang]);

  return { categories, loading, error };
}
