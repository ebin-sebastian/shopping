import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {

  products:any

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.viewAllproduct().subscribe(data=>{
      // console.log(data);
      this.products=data
    })
  }
}
