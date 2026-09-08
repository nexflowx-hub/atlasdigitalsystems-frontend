export type Locale = "en-US" | "pt-BR" | "pt-PT" | "es" | "fr";

export type LocaleConfig = {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
};

export const locales: LocaleConfig[] = [
  { code: "en-US", label: "English (US)", nativeLabel: "English", flag: "US" },
  { code: "pt-BR", label: "Português (Brasil)", nativeLabel: "Português", flag: "BR" },
  { code: "pt-PT", label: "Português (Portugal)", nativeLabel: "Português", flag: "PT" },
  { code: "es", label: "Español", nativeLabel: "Español", flag: "ES" },
  { code: "fr", label: "Français", nativeLabel: "Français", flag: "FR" },
];

export const defaultLocale: Locale =
  (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locale) || "en-US";
