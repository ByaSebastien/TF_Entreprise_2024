import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieForm } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getAll(): Observable<Movie[]> {
    return this._http.get<Movie[]>('http://localhost:3000/movies');
  }

  create(form: MovieForm) {
    return this._http.post<Movie>('http://localhost:3000/660/movies', form);
  }
}
