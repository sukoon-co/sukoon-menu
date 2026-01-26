"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { headerVariants } from "@/lib/animations";

export function Header() {
  const { locale, setLocale, t } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
              src="/logo-h.svg"
              className="w-auto text-2xl font-serif font-bold text-primary tracking-tight"
              style={{ width: "160px" }}
              alt="SUKOON"
            />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t.switchLanguage}
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
              {locale === "en" ? "العربية" : "English"}
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
