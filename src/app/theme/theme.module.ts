import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme/theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule
  

  ],
  declarations: [
    ThemeComponent,FooterComponent,NavbarComponent
  ]
})
export class ThemeModule { }
