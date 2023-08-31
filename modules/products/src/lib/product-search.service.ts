import { Observable, map } from 'rxjs';
import { Product, ProductSearch } from './models/product-search.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) { }



  searchByTerm(term: string): Observable<Product[]>{
    return this.http
    .get<ProductSearch>(`https://swapi.dev/api/people/?search=${term}`)
    .pipe(
      // utilizar operadores
      map((search) => search.results)
    );
  }
}
