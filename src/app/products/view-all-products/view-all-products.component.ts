import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {

  products:any
  filtercategory:any
  searchKey:any=''

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.viewAllproduct().subscribe(data=>{
      // console.log(data);
      this.products=data
    })

    this.productService.search.subscribe((value:any)=>{
      this.searchKey=value
    })
  }

filter(category:any){
  this.filtercategory=this.products.filter((item:any)=>{
    if(item.categoryId==category  || category==''){
      return item
    }
  })
}

}
