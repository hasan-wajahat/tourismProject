import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './main/landing/landing.component';
import { BookingComponent } from './main/booking/booking.component';
import { InfoComponent } from './main/info/info.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'info', component: InfoComponent},
    { path: 'contactUs', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }