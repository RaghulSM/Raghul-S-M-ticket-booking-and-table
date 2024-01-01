import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hide:any=false;
  hideSalary(){
    this.hide=!this.hide;
  }
}
