import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/cart/cart.state';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selectors';
import { clearCart, removeFromCart } from '../../store/cart/cart.actions';
import { CommonModule } from '@angular/common';
import { ProductListSliderComponent } from "../../components/product-list-slider/product-list-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
images = [
    'images/dress/dress2.jpg',
    'images/dress/dress3.jpg',
    'images/dress/dress4.jpg',
    'images/dress/dress5.jpg',
    'images/dress/dress2.jpg'
  ];

  products = [
  {
    id: 'prod-1',
    name: 'Twilight Blossom Printed Co-ord Set',
    price: 2000,
    image: 'images/dress/dress2.jpg',
    rating: 4.5,
    shortDescription: 'High-quality material, trendy design, and durable build.',
   
    originalPrice: 6999,
     offer: "30", // Percentage off for ribbon
  
  

  },
  {
    id: 'prod-2',
    name: 'Scarlet Red Alia Cut Printed Co-ord Set',
    price: 2500,
    image: 'images/dress/dress2.jpg',
     rating: 4.5,
    shortDescription: 'High-quality material, trendy design, and durable build.',
   
     originalPrice: 2999,
     offer: "30", // Percentage off for ribbon
  
  
  },
  {
    id: 'prod-3',
    name: 'Coral Orange Cotton Suit Set with Kota Dupatta',
    price: 2500,
    image: 'images/dress/dress2.jpg',
     rating: 4.5,
    shortDescription: 'High-quality material, trendy design, and durable build.',
   
     originalPrice: 9999,
     offer: "30", // Percentage off for ribbon
  
  
  },
  {
    id: 'prod-4',
    name: 'Shoulder Cut Halter Neck Light ',
    price: 2500,
    image: 'images/dress/dress2.jpg',
     rating: 4.5,
    shortDescription: 'High-quality material, trendy design, and durable build.',
   
     originalPrice: 4999,
     offer: "30", // Percentage off for ribbon
  
  
  },
    {
      id: 'prod-5',
    name: 'Shoulder Cut Halter Neck Light ',
    price: 2500,
    image: 'images/dress/dress2.jpg',
     rating: 4.5,
    shortDescription: 'High-quality material, trendy design, and durable build.',
   
     originalPrice: 6999,
     offer: "30", // Percentage off for ribbon
  
  
  }
];


}
