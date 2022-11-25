
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year=0;
  emp=0;
  client=0;
  project=0;

  constructor() { }

  ngOnInit(): void {
   this.animateyear();
   this.animateemp();
   this.animateclient();
   this.animateproject();
  }

  animateyear(){
    setInterval(()=>{
      if(this.year<5)
        {
        this.year=this.year+1;
        } 
    },500);
  }
  animateemp(){
    setInterval(()=>{
      if(this.emp<300)
        {
        this.emp=this.emp+1;
        } 
    },0);
  }
  animateclient(){
    setInterval(()=>{
      if(this.client<60)
        {
        this.client=this.client+1;
        } 
    },30);
  }
  animateproject(){
    setInterval(()=>{
      if(this.project<100)
        {
        this.project=this.project+1;
        } 
    },20);
  }

}
