import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentListPageRoutingModule } from './student-list-routing.module';
import { StudentListPage } from './student-list.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentListPageRoutingModule,
    SharedModule
  ],
  declarations: [StudentListPage]
})
export class StudentListPageModule { }
