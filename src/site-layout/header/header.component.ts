import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchterm:any

  constructor(private productservice:ProductService){}

  search(event:any){
      this.searchterm=event.target.value
      this.productservice.search.next(this.searchterm)
  }
}
