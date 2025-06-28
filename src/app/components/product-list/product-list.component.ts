import { AfterViewInit, Component, OnDestroy, OnInit, signal, ViewChild, TemplateRef } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { addToWishlist } from '../../store/wishlist/wishlist.actions';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink,MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loading', { static: true }) loading!: TemplateRef<any>;

  // Initialize the signal to store products
  products = signal<ProductInterface[]>([]);
  sliderImages = signal<string[]>([
    '/images/banner/banner1.png'
  ]);
  myIndex: number = 0;
  private carouselTimeout: any; // Reference to the setTimeout
  public likedProducts: boolean[] = [];

  constructor(private productService: ProductService, private store: Store) {
    this.likedProducts = Array()
  }
 productsList:any = [
    {
      name: 'Floral Maxi Dress',
      price: 59.99,
      img: 'images/dress/dress1.jpg'
    },
    {
      name: 'Summer Linen Dress',
      price: 49.0,
      img: 'images/dress/dress2.jpg'
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      img: 'images/dress/dress3.jpg'
    },
    {
      name: 'Evening Elegance Gown',
      price: 89.99,
      img: 'images/dress/dress4.jpg'
    },
    {
      name: 'Boho Chic Dress',
      price: 45.0,
      img: 'images/dress/dress5.jpg'
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      img: 'images/dress/dress3.jpg'
    },
    {
      name: 'Evening Elegance Gown',
      price: 89.99,
      img: 'images/dress/dress4.jpg'
    },
        {
      name: 'Floral Maxi Dress',
      price: 59.99,
      img: 'images/dress/dress1.jpg'
    },
    {
      name: 'Summer Linen Dress',
      price: 49.0,
      img: 'images/dress/dress2.jpg'
    },
    {
      name: 'Casual Fit Dress',
      price: 39.5,
      img: 'images/dress/dress3.jpg'
    },
    {
      name: 'Evening Elegance Gown',
      price: 89.99,
      img: 'images/dress/dress4.jpg'
    },
  ];
  ngOnInit():void{
    // Fetch products using the service
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
      this.likedProducts = Array(products.length).fill(false); // Initialize likedProducts here
    })
  }
  ngAfterViewInit(): void {
    this.carousel();
  }

  addToWishlist(product: ProductInterface): void {
    this.store.dispatch(addToWishlist({ product }));
  }

  toggleWishlist(index: number): void {
    this.likedProducts[index] = !this.likedProducts[index];
  }

  carousel(): void {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (!slides.length) {
      return; // Safeguard in case slides are not available
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.myIndex++;
    if (this.myIndex > slides.length) {
      this.myIndex = 1;
    }
    slides[this.myIndex - 1].style.display = "block";

    // Save the timeout reference to clear it later
    this.carouselTimeout = setTimeout(() => this.carousel(), 3500);
  }

  ngOnDestroy(): void {
    if(this.carouselTimeout){
      clearTimeout(this.carouselTimeout);
    }
  }
}
