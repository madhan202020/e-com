import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from '../../store/cart/cart.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, CartComponent , RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemCount$: Observable<number>;
  isScrolled: boolean = false;
  selectedCategory:string = '';
  searchQuery:string = '';
  categories: string[] = ['Electronics', 'Beauty and Cosmetics', 'Clothing and Fashion'];

  isCartSidebarOpen = false;
  menus = [
    { label: 'Home', path: '/home' },
    { label: 'Shopping', path: '/products' },
    { label: 'My Orders', path: '/orders' }
  ];

openCartSidebar() {
  this.isCartSidebarOpen = true;
}

closeCartSidebar() {
  this.isCartSidebarOpen = false;
}

  constructor(private store: Store, private router: Router){
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0; // Detect scrolling
  }

  onSearch():void {
    // Navigate to the results page with query parameters
    this.router.navigate(['/results'], {
      queryParams: {
        query: this.searchQuery,
        category: this.selectedCategory
      }
    });
  }

  onLogout(): void {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }

}
