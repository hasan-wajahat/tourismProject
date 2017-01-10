import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './main/landing/landing.component';
import { BookingComponent } from'./main/booking/booking.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    {path: 'booking', component: BookingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }