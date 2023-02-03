import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ProductOrder } from '../order';
import { Product } from '../products';
import { baseURL } from '../utilities';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ordersOfProducts: ProductOrder[] = [];

  constructor(private http: HttpClient, private location: Location) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseURL}/products`).pipe(catchError(this.httpErrorHandler));
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${baseURL}/products/${id}`).pipe(catchError(this.httpErrorHandler));
  }

  public updateProduct(id: number, data: any) {
    return this.http.put<Product>(`${baseURL}/products/${id}`, data).pipe(catchError(this.httpErrorHandler));
  }

  public deleteProductById(id: number) {
    return this.http.delete<Product>(`${baseURL}/products/${id}`).pipe(catchError(this.httpErrorHandler));
  }

  public addToCart(productId: number): void {
    let ordersOfProducts = this.ordersOfProducts.find(ordersOfProducts => ordersOfProducts.productId === productId);
    if (ordersOfProducts === undefined) {
      this.ordersOfProducts.push({ productId: productId, quantity: 1 });
    } else {
      ordersOfProducts.quantity += 1;
    }
  }

  public addProduct(data: any) {
    return this.http.post<Product>(`${baseURL}/products`, data).pipe(catchError(this.httpErrorHandler));
  }

  checkout(): any {
    const data = { customer: 'doej', products: this.ordersOfProducts };
    return this.http.post(`${baseURL}/orders`, data, { responseType: 'text' });
  }

  getCartOrders(): ProductOrder[] {
    return this.ordersOfProducts;
  }

  backToProductList(): void {
    this.location.back();
  }

  private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs with the following error message: " + error.message);
    } else {
       console.error(
          "An error occured on the server. The HTTP status code is: "  + error.status + ", and the error message is " + error.message);
    }
 
    return throwError("Error occurred. Pleas try again");
 }
}
