import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../products';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  formEditGroup: FormGroup | undefined;
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.editProductForm();
  }

  editProductForm() {
    const formEditGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
  }


  ngOnInit() {
    const productIdFromRoute = this.route.snapshot.params['id'];
    console.log(productIdFromRoute);
    // this.getProductData(productIdFromRoute);
    this.productService.getProductById(productIdFromRoute)
      .subscribe((itemData: Product) => {
        console.log(itemData);
        this.formEditGroup = new FormGroup({
          name: new FormControl(itemData['name']),
          description: new FormControl(itemData['description']),
          category: new FormControl(itemData['category']),
          price: new FormControl(itemData['price']),
          image: new FormControl(itemData['image'])
        })
      });
  }


  onClickSubmit() {
    console.log(this.formEditGroup?.value);
    this.productService.updateProduct(this.route.snapshot.params['id'], this.formEditGroup?.value)
      .subscribe((result: Product) => {
        alert("You have successfully updated the details of this product.")
        this.productService.backToProductList();
      })
  }
}
