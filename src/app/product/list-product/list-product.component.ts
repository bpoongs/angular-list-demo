import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  title: string = "LIST OF PRODUCTS...";
  
  allProducts: Product[] = [];  
  //productService: ProductService;

  constructor(private productService: ProductService, private router: Router) {
    //this.productService = productService;
   }

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
  }

  deleteProduct(prodId: number){
    console.log(prodId);
    this.productService.deleteProduct(prodId);
  }

  editProduct(prodId: number){
    console.log(prodId);
    this.router.navigate(['edit-product', prodId])
  }

  goToAdd(): void{
    this.router.navigate(['add-product']);
  }
}
