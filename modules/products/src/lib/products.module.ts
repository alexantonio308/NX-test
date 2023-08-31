import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiComponent } from '@org/modules/shared/ui';
import { productsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes), UiComponent, ReactiveFormsModule],
  declarations: [ProductListComponent],
})
export class ProductsModule {}
