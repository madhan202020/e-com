import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ProductInterface } from '../../models/product.model';
import { map } from 'rxjs';
import { CommonModule, Location } from '@angular/common';
import { CartItem } from '../../store/cart/cart.state';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';
import { addToWishlist } from '../../store/wishlist/wishlist.actions';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private apollo = inject(Apollo);
  private location = inject(Location)
  product: any | null = null;
  public likedProducts: boolean = false;
  selectedImage: string | null = null;

  constructor(private store: Store){}

  ngOnInit(): void {

    this.product={
            "id": 1,
            "name": "Red Silk Saree",
            "description": "Elegant red saree with golden border",
            "price": 2599.99,
            "sku": "SKU001",
            "categoryId": 1,
            "categoryName": "Sarees",
            "createdAt": "2025-07-03T19:19:36",
            "updatedAt": "2025-07-03T19:19:36",
subImages: [
  'images/dress/dress1.jpg',
  'images/dress/dress2.jpg',
  'images/dress/dress3.jpg',
  'images/dress/dress2.jpg',
  'images/dress/dress3.jpg'
],            "image": 'images/dress/dress1.jpg',
            "variants": [
                {
                    "variantId": 1,
                    "variantName": "Size",
                    "optionId": 3,
                    "optionValue": "L"
                },
                {
                    "variantId": 2,
                    "variantName": "Color",
                    "optionId": 4,
                    "optionValue": "Red"
                }
            ],
            "totalInventory": 15
        }
 


    const productId = this.route.snapshot.paramMap.get('id');

if (productId) {
  const GET_PRODUCT_BY_ID = gql`
    query GetProduct($id: ID!) {
      product(id: $id) {
        id
        name
        description
        price
        imageUrl
      }
    }
  `;

  this.apollo
    .watchQuery<{ product: any }>({
      query: GET_PRODUCT_BY_ID,
      variables: { id: productId },
    })
    .valueChanges
    .pipe(map(result => result.data.product))
    .subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      }
    });
}

  }

  addToCart(product: ProductInterface | null): void{
    if(product){
      const cartItem: CartItem = {
        ...product,
        quantity: 1, // Default quantity
      };
      this.store.dispatch(addToCart({ item: cartItem }));
    }
  }

  toggleWishlist(): void {
    this.likedProducts = !this.likedProducts;
  }
  
  addToWishlist(product: ProductInterface | null): void {
    if (product) {
      // Add product to the wishlist logic
      this.store.dispatch(addToWishlist({ product }));
    }
  }

  goBack(): void {
    this.location.back();
  }
  

}
