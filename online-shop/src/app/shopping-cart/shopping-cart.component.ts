import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required ],
    email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    address: ['', Validators.required ]
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert('Your order has been accepted.');
    this.checkoutForm.reset();
  }

}
