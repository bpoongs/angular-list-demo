import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductData: Product = {
    productId: 0,
    productName: '',
    productCost: 0,
    productDescription: "",
    productImageUrl: ""
}
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(myForm: NgForm){
    console.log(myForm);
    let myProduct: Product = {
      productId: this.addProductData.productId,
      productName: this.addProductData.productName,
      productCost: this.addProductData.productCost,
      productDescription: this.addProductData.productDescription ,
      productImageUrl: this.addProductData.productImageUrl
    }
    //this.allProducts.push(myProduct);
    this.productService.addProduct(myProduct).subscribe((response) => {
      console.log(response);
      this.router.navigate(['list-product']);
    });

    
  }
}
