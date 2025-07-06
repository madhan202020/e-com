// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductInterface } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsList: ProductInterface[] = [
    {
      name: 'Floral Maxi Dress',
      price: 59.99,
      image: 'images/dress/dress1.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: '30',
      id: 'prot_1',
      imageUrl: ''
    },
    {
      name: 'Summer Linen Dress',
      price: 49.0,
      image: 'images/dress/dress2.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: '30',
      id: '',
      imageUrl: ''
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      image: 'images/dress/dress3.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: '30',
      id: '',
      imageUrl: ''
    },
{
  name: 'Evening Elegance Gown',
  price: 89.99,
  image: 'images/dress/dress4.jpg',
  rating: 4.5,
  shortDescription: 'High-quality material, trendy design, and durable build.',
  originalPrice: 6999,
  offer: "30",
  id: '',
  imageUrl: ''
},
    {
      name: 'Boho Chic Dress',
      price: 45.0,
      image: 'images/dress/dress5.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      image: 'images/dress/dress3.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
    {
      name: 'Evening Elegance Gown',
      price: 89.99,
      image: 'images/dress/dress4.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
        {
          name: 'Floral Maxi Dress',
          price: 59.99,
          image: 'images/dress/dress1.jpg',
          rating: 4.5,
          shortDescription: 'High-quality material, trendy design, and durable build.',
          originalPrice: 6999,
          offer: "30",
          id: '',
          imageUrl: ''
        },
    {
      name: 'Summer Linen Dress',
      price: 49.0,
      image: 'images/dress/dress2.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      image: 'images/dress/dress3.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
    {
      name: 'Evening Elegance Gown',
      price: 89.99,
      image: 'images/dress/dress4.jpg',
      rating: 4.5,
      shortDescription: 'High-quality material, trendy design, and durable build.',
      originalPrice: 6999,
      offer: "30",
      id: '',
      imageUrl: ''
    },
  ];

  getProducts(): Observable<ProductInterface[]> {
    return of(this.productsList);
  }
}
