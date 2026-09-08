export type CurrencyCode = "USD" | "GBP" | "EUR" | "BRL";

export type CurrencyConfig = {
  code: CurrencyCode;
  symbol: string;
  label: string;
  locale: string;
};

export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", label: "US Dollar", locale: "en-US" },
  GBP: { code: "GBP", symbol: "£", label: "British Pound", locale: "en-GB" },
  EUR: { code: "EUR", symbol: "€", label: "Euro", locale: "en-IE" },
  BRL: { code: "BRL", symbol: "R$", label: "Brazilian Real", locale: "pt-BR" },
};

export const defaultCurrency: CurrencyCode =
  (process.env.NEXT_PUBLIC_DEFAULT_CURRENCY as CurrencyCode) || "USD";

export function formatPrice(
  amount: number,
  currency: CurrencyCode = defaultCurrency
): string {
  const cfg = currencies[currency];
  return new Intl.NumberFormat(cfg.locale, {
    style: "currency",
    currency: cfg.code,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
