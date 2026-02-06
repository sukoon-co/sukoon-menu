"use client";

import { useEffect, useState } from "react";
import { fetchSubCategories, ApiSubCategory } from "@/lib/api";

export function useSubCategories(parentId: string, lang: "en" | "ar") {
  const [subCategories, setSubCategories] = useState<ApiSubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!parentId) {
      setSubCategories([]);
      setLoading(false);
      return;
    }

    async function loadSubCategories() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSubCategories(parentId, lang);
        setSubCategories(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load sub-categories");
      } finally {
        setLoading(false);
      }
    }

    loadSubCategories();
  }, [parentId, lang]);

  return { subCategories, loading, error };
}
