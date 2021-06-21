import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  // String firstName = "Priya";
  // firstName: string = "Priya";
  title: string = "LIST OF PRODUCTS...";

  showForm: boolean = false;
  // product = {
  //   productId: 101,
  //   productName: "Chips",
  //   productCost: 20,
  //   productDescription: "Crispy Chips!!",
  //   productImageUrl: ""
  // }

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

  addProductData: Product = {
      productId: 0,
      productName: '',
      productCost: 0,
      productDescription: "",
      productImageUrl: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  showAddForm(){
    this.addProductData = {
      productId: 0,
      productName: '',
      productCost: 0,
      productDescription: "",
      productImageUrl: ""
  }
    this.showForm = !this.showForm;
   
  }

  addProduct(){
    this.addProductData.productId = this.allProducts[this.allProducts.length - 1].productId + 1;
    let myProduct: Product = {
      productId: this.addProductData.productId,
      productName: this.addProductData.productName,
      productCost: this.addProductData.productCost,
      productDescription: this.addProductData.productDescription ,
      productImageUrl: this.addProductData.productImageUrl
    }
    this.allProducts.push(myProduct);
    this.addProductData = {
      productId: 0,
      productName: '',
      productCost: 0,
      productDescription: '',
      productImageUrl: ''
  }
  }

  deleteProduct(prodId: number){
    console.log(prodId);
    this.allProducts.splice(this.allProducts.findIndex((prod) => prod.productId == prodId), 1);
  }

  editProduct(prodId: number){
    console.log(prodId);
    
  }

}
