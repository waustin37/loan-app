/**
 * Title: app-routing.module.ts
 * Author: William Austin
 * Date: 29 September 2023
 * Description: The Routing for our Loan App
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path:'calculator',
    component: CalculatorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
