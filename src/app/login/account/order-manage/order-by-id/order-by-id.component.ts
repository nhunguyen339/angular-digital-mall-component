import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../models/cart/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../../models/cart/order';

@Component({
  selector: 'app-order-by-id',
  templateUrl: './order-by-id.component.html',
  styleUrls: ['./order-by-id.component.css']
})
export class OrderByIdComponent implements OnInit {
currentOrder = new Order();
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.currentOrder = new Order();
    this.getOrder()
  }

  getOrder() {
    let id = this.route.snapshot.paramMap.get('_id');
    this.orderService.getOrder(id).subscribe(
      _ => this.currentOrder = _
    )
  }

}
