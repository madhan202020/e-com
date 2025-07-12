import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectWishlistItems } from '../../store/wishlist/wishlist.selectors';
import { removeFromWishlist } from '../../store/wishlist/wishlist.actions';
import { Observable } from 'rxjs';

interface WishlistItem {
 id: string;
  name: string;
  description?: string;
  category?: string;
  brand?: string;
  price: number;
  imageUrl: string;

  // Add frontend-specific fields if needed
  rating: number;
  shortDescription?: string;
  originalPrice: number;
  offer?: string;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  wishlist$!: Observable<WishlistItem[]>;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.wishlist$ = this.store.select(selectWishlistItems);
  }

  removeItem(id: string): void {
    this.store.dispatch(removeFromWishlist({ id }));
  }

}
