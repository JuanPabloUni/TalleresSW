import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CafeListComponent, CafeDetailComponent],
  exports: [CafeListComponent],
})
export class CafeModule { }
