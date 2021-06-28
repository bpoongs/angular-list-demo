import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup;

  constructor(private productService: ProductService, 
                private activatedRoute: ActivatedRoute,
                private router: Router) { 

    this.editForm = new FormGroup({
      productId: new FormControl(),
      productName: new FormControl('',[Validators.required, 
                                        Validators.minLength(3),
                                        Validators.maxLength(15)]),
      productCost: new FormControl(),
      productDescription: new FormControl(),
      productImageUrl: new FormControl()
    })
  }

  ngOnInit(): void {
    let productId: any = this.activatedRoute.snapshot.paramMap.get('prodId');

    this.productService.getProduct(productId).subscribe((product) => {
      this.editForm.setValue(product);
    });
    
  }

  editProduct(){
    console.log(this.editForm);
    this.productService.updateProduct(this.editForm.value).subscribe((response) => {
      console.log(response);
      this.router.navigate(['list-product']);
    });
    
  }
}
