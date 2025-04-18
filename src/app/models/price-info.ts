export interface PriceCurrency {
  amount: number;
  amountInt: number;
  currency: string;
}

export interface HistoryLow {
  all: PriceCurrency;
  y1: PriceCurrency;
  m3: PriceCurrency;
}

export interface Shop {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Deal {
  shop: Shop;
  price: PriceCurrency;
  regular: PriceCurrency;
  cut: number;
  voucher: string | null;
  storeLow: PriceCurrency;
  flag: string | null;
  drm: string[];
  platforms: Platform[];
  timestamp: string;
  expiry: string | null;
  url: string;
}

export interface PriceInfo {
  id: string;
  historyLow: HistoryLow;
  deals: Deal[];
}
