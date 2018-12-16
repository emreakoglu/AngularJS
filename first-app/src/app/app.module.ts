import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RentacarComponent } from './rentacar/rentacar.component';
import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
  {path: 'rentacar', component: RentacarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RentacarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
