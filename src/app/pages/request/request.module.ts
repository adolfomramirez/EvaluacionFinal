import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestPageRoutingModule } from './request-routing.module';
import { RequestPage } from './request.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RequestPageRoutingModule,
    SharedModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule { }
