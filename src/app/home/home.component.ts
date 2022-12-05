
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.countanimation();
  }

   countanimation(){
    let valueDisplays = document.querySelectorAll("#num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay:any) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
    startValue += 1;
    if(endValue==60){
      valueDisplay.textContent= startValue+",000+";
     }else{
     valueDisplay.textContent= startValue+"+";
     }
    if (startValue == endValue) {
      clearInterval(counter);
      }
    }, duration);
      });

  }

}
