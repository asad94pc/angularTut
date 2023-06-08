import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RefreshComponent } from './refresh/refresh.component';



@NgModule({
  declarations: [
    SigninComponent,
    RefreshComponent
  ],
  exports: [
    SigninComponent,
    RefreshComponent
  ],
  imports: [
    CommonModule,
  ]
  
})
export class UsersModule { }
