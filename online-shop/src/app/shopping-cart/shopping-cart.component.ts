import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductOrder } from '../order';
import { Product } from '../products';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  //items = this.cartService.getItems();
  orderedItems: any = []

  constructor(private productService: ProductService, private location: Location,
    private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required ],
    email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    address: ['', Validators.required ]
  });

  onSubmit(): void {
    //this.items = this.cartService.clearCart();
    window.alert('Your order has been accepted.');
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.productService.getCartOrders().forEach((productOrder) => {
      this.productService.getProductById(productOrder.productId).subscribe((item) => {
        let product = <Product>item;
        this.orderedItems.push({ product: product, quantity: productOrder.quantity });
      });
    });
  }

  checkoutEventHandler() {
    this.productService.checkout().subscribe(() => {
      // alert('Checkout succesfully done');
      this.goBack();
    });
    this.checkoutForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
