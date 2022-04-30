import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './../../core/models/cocktail';
import { max, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly cocktailPath: string = '/cocktails';

  constructor(private _http: HttpClient) { }

  get(): Observable<Cocktail[]> {
    return this._http.get<Cocktail[]>(
      `${environment.apiBaseUrl}${this.cocktailPath}`
    );
  }

  getById(id: number): Observable<Cocktail> {
    return this._http.get<Cocktail>(
      `${environment.apiBaseUrl}${this.cocktailPath}/${id}`
    );
  }

  create(cocktail: Cocktail): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.cocktailPath}`,
      cocktail
    );
  }

  update(cocktail: Cocktail): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.cocktailPath}/${cocktail.id}`,
      cocktail
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.cocktailPath}/${id}`
    );
  }
}
