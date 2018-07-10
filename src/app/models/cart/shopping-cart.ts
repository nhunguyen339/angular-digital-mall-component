import { CartItem } from "./cart-item";
import { Book } from "../book";


export class ShoppingCart {
    items: CartItem[] = new Array<CartItem>();
    total: number = 0;
    amount:number = 0;
    discount: number = 0;
}
// export class ItemsFound {
//     book: Book = new Book();
//     quatity : number;
// }