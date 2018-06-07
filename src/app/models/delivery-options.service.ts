import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';

@Injectable()
export class DeliveryOptionsService {
  private deliveryOptionsUrl="https://green-web-bookstore.herokuapp.com/api/books";
  constructor (
    private http: HttpClient
  ) {}

  getDeliveryOptions(): Observable<DeliveryOptionsService> {
    return this.http.get<DeliveryOptionsService>(this.deliveryOptionsUrl);
  }


}
