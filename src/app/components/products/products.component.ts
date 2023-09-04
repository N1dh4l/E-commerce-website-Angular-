import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  public productList : any
  constructor(private api : ApiService){}
  ngOnInit(){
      this.api.getProducts().subscribe( res => { this.productList = res; })
  }
}
