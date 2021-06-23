import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts: Product[] = [
    {
      productId: 101,
      productName: "Chips",
      productCost: 20,
      productDescription: "Crispy Chips!!",
      productImageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      productId: 102,
      productName: "Cakes",
      productCost: 50,
      productDescription: "Delicious Cakes!!",
      productImageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80"
    },
    {
      productId: 103,
      productName: "Cookies",
      productCost: 20,
      productDescription: "Cookies!!",
      productImageUrl: "https://images.unsplash.com/photo-1568051243858-533a607809a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  ]

  constructor() { }

  getAllProducts(): Product[]{
    return this.allProducts;
  }

  deleteProduct(productId: any): void{
    this.allProducts.splice(this.allProducts.findIndex((prod) => prod.productId == productId), 1);
  }

  addProduct(newProduct: Product): Product[]{
    newProduct.productId = this.allProducts[this.allProducts.length - 1].productId + 1;
    this.allProducts.push(newProduct);
    return this.allProducts;
  }

  getProduct(productId: number): any{
    let product = this.allProducts.find((prod) => prod.productId == productId)
    return product;
  }

  updateProduct(updateProduct: Product): Product[]{
    let productIndex = this.allProducts.findIndex((prod) => prod.productId == updateProduct.productId);
    this.allProducts[productIndex] = updateProduct;
    return this.allProducts;
  }

  
}
