export interface Product {
  id: string;
  title?: string;
  desc?: string;
  name: string;
  prevPrice: null | number;
  price: number;
  rating: number;
  onSale?: boolean;
  imageUrl: string;
}
