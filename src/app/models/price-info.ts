export interface PriceInfo {
  price_new?: number;
  price_old?: number;
  price_cut?: number;
  drm?: string[];
  shop?: Shop;
  url?: string;
}

interface Shop {
  id?: string
  name?: string;
}
