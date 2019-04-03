import { Component, OnInit } from "@angular/core";
//TODO: import ngform...
import { OrdersService } from "../shared/orders.service";
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  
  orderForm;
  addCorrect:boolean;
  
  constructor(private ordersService: OrdersService,
                private fb:FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: '',
      orderNumber: ''
    });
  }

  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  coffeeOrder = [];

  //TODO: add a new coffe...
  

  //TODO: remove a coffe...

  onSubmit() {
    let data = this.orderForm.value;
    this.ordersService
      .createCoffeeOrder(data)
      .then(res => {
        this.addCorrect = res;        
    });

    if(this.addCorrect){
      this.orderForm.reset();
    }
    return false;
  }
}
