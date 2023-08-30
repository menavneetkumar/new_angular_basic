import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  get():void{
    localStorage.getItem('myvariable');
  }
  save(text:string){
    localStorage.setItem('myvariable',text);
  }
  remove(){
    localStorage.removeItem('myvariable');
  }
}
