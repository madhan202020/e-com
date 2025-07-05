import { AfterViewInit, Component, OnDestroy, OnInit, signal, ViewChild, TemplateRef, Input } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { CartItem } from '../../store/cart/cart.state';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';

@Component({
  selector: 'app-product-list-slider',
  standalone: true,
  imports: [CommonModule, RouterLink,MatIconModule,CarouselModule ,],
  templateUrl: './product-list-slider.component.html',
  styleUrl: './product-list-slider.component.scss'
})

export class ProductListSliderComponent  {
  @Input() title: string = 'New Arrivals';
  @Input() products: any[] = [];
  @Input() viewAllUrl: string = '/products';

  constructor(private router: Router,private store: Store) {}

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  viewAll() {
    this.router.navigate([this.viewAllUrl]);
  }

  addToCart(product: ProductInterface) {
  const cartItem: CartItem = { ...product, quantity: 1 };
  console.log('Adding to cart:', cartItem); // Check for unique ID
  this.store.dispatch(addToCart({ item: cartItem }));
}

}
