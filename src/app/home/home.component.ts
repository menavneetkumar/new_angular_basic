import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private mystorage:MyServiceService){ }
  home="Hey, Hello this is home"
  ngOnInit(){
    this.home=localStorage.getItem('myvariable') || 'Default value';
  }
  save(text:any){
    this.mystorage.save(text);
  }
  remove(){
    this.ngOnDestroy();
  }
  ngOnDestroy(){
    this.mystorage.remove();
  }

}
