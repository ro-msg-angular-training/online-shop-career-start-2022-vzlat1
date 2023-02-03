import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products'
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  idOfProduct: number | undefined;
  product: Product | undefined;
  products: Product[] | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private location: Location) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productService.getProductById(productIdFromRoute)
      .subscribe((itemData: Product) => this.product = itemData);
    this.idOfProduct = productIdFromRoute;
  }

  addToCartHandler(id: number): void {
    this.productService.addToCart(id);
    alert(`The following product is successfully added to the cart: ${this.product?.name}`)
  }

  deleteCurrentProduct(id: number) {
    this.productService.deleteProductById(id).subscribe(() => {
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
        alert(`The product with ID ${id} has been successfully deleted`);
        this.backToProductList();
      });
    });
  }

  backToProductList(): void {
    this.location.back();
  }

  // getProductById(id: number): Observable<Product> {
  //   return this.productService.getProductById(id);
  // }

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
}
