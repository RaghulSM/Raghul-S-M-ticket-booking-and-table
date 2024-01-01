import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent {
  constructor(private router:Router){

  }
 room:any=0;
 numbers:any=0;
 facility:any=0;
 total:any=0;
redirect(){
this.router.navigateByUrl("/booking")
}

}
