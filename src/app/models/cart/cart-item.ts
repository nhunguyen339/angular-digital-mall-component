export class CartItem {
    _id: string;
    productId: string;
    quantity: number = 0;
    image: string;
    title: string;
    sellingPrice: number;
    previousPrice: number;
}