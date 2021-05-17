import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { DashboardrouterComponent } from './dashboardrouter/dashboardrouter.component';

import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsComponent } from './Carts/carts.component';
const pageRoutes: Routes = [
    {
        path: "",
        component: DashboardrouterComponent,
        children: [

            { path: '', component: DashboardComponent },
            { path: 'carts', component: CartsComponent },
        ],data: { moduleId: 1 }


    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pageRoutes),

        FormsModule, 
        ReactiveFormsModule
       
    ],
    declarations: [
        DashboardComponent,
        DashboardrouterComponent,
        
        
    ],

    entryComponents: [],
})
export class DashboardModule { }