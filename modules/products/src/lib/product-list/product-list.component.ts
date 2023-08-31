import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, filter, switchMap } from 'rxjs';

import { FormControl } from '@angular/forms';
import { Product } from '../models/product-search.model';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'org-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productsSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      debounceTime(300),
      filter(text => text.length > 1),
      switchMap(text => this.productsSearchService.searchByTerm(text))
    );
  }
}
