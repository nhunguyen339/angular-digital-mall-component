import { User } from "../login-logout/user";
import { Book } from "../book";


export class Order {
    _id: string;
    _user = new _User();
    books: BOOK[] = new Array<BOOK>();
    total: number;
}

export class BOOK {
    price: number;
    quantity: number;
    _book = new _Book();
}
export class _User {
    email: string;
    _id: string;
}
export class _Book {
    _id: string;
    title: string;
}
