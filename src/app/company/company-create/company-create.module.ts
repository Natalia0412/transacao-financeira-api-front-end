import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyCreateRoutingModule } from './company-create-routing.module';
import { CompanyCreateComponent } from './company-create.component';


@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    CommonModule,
    CompanyCreateRoutingModule
  ]
})
export class CompanyCreateModule { }
