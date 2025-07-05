import { ProductInterface } from "../../models/product.model";

export interface CartItem extends ProductInterface {
    quantity: number;
    image?:string; // To track quantity for each product in the cart
}

export interface CartState {
    items: CartItem[];
}

export const initialCartState: CartState = {
    items: [],
}
