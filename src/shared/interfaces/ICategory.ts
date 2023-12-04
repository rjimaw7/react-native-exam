export interface ICategory {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICategoryResponse {
  products: ICategory[];
  total: number;
  skip: number;
  limit: number;
}
