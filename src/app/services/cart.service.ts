import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public itemCartList : any = []
  public productList = new BehaviorSubject<any>([]);
  
  constructor() { }
  
  getProducts(){
    return this.productList.asObservable();
  }
  
  setProduct(product: any){
    this.itemCartList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any){
    this.itemCartList.push(product);
    this.productList.next(this.itemCartList);
    this.getTotalPrice();
    console.log(this.itemCartList);
    
  }

  getTotalPrice(){
    let grandTotal =0;
    this.itemCartList.map((a:any)=>{
        grandTotal += a.total;
    })
  }

  removeCartItem(product: any){
    this.itemCartList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.itemCartList.splice(index,1);
      }
    })
  }

  removeAllCartItem(){
    this.itemCartList = []
    this.productList.next(this.itemCartList);
  }
}
