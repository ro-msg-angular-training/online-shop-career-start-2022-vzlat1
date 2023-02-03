export interface Order {
    customer: string,
    products: ProductOrder[]
}
export interface ProductOrder {
    productId: number,
    quantity: number
}