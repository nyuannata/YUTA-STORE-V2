export interface PriceItem {
  duration: string;
  price: string;
}

export interface ProductVariant {
  name?: string; // e.g., "Sharing", "Private", "1P1U"
  items: PriceItem[];
  highlight?: string; // Optional badge like "Private Biasa"
}

export interface Product {
  id: string;
  name: string;
  logoText: string;
  logoColor: string; // Tailwind bg color classes
  variants: ProductVariant[];
  fullWidth?: boolean; // For products that need to span more columns if needed
}
