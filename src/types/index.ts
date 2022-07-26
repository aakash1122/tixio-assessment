export interface Product {
  title?: string;
  desc?: string;
  name: string;
  prevPrice: null | number;
  price: number;
  rating: number;
  onSale?: boolean;
  imageUrl: string;
}
