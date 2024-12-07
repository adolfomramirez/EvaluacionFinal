import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentCoursesPageRoutingModule } from './student-courses-routing.module';
import { StudentCoursesPage } from './student-courses.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCoursesPageRoutingModule,
    SharedModule
  ],
  declarations: [StudentCoursesPage]
})
export class StudentCoursesPageModule { }
