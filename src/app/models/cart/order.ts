import { User } from "../login-logout/user";
import { Book } from "../book";


export class Order {
    _user = new User()._id;
    books: BOOK[] = new Array<BOOK>();
    total: number;
}

export class BOOK {
    price: number;
    quantity: number;
    _book= new Book()._id;
}
