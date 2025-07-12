export interface ProductInterface {
  id: any;
  name: string;
  description?: string;
  category?: string;
  brand?: string;
  price: number;
  imageUrl: string;
  image?:string;

  // Add frontend-specific fields if needed
  rating: number;
  shortDescription?: string;
  originalPrice: number;
  offer?: string;
}
