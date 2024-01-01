import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path: "flight",
    component: FlightComponent,
  },
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "hotel",
    component:HotelComponent
  },
  {
    path: "booking",
    component:BookingComponent
  },
  {
    path: "**",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
