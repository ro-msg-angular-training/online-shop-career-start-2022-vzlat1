import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  
  constructor(private productService: ProductService) {}

  productForm = new FormGroup ({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('')
  });

  addProductToList() {
    this.productService.addProduct(this.productForm.value)
      .subscribe((item) => {
        alert("You have successfully added a new product.")
        this.productService.backToProductList();
      })
  }

}