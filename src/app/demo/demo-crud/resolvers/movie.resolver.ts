import { ResolveFn, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Movie } from '../models/movie';

export const movieResolver: ResolveFn<Observable<Movie[]>> = (route, state) => {

  const movieService: MovieService = inject(MovieService);
  const router: Router = inject(Router);

  return movieService.getAll().pipe(
    catchError((error) => {
      console.log('KO');
      router.navigate(['home']);
      return of([]);
    })
  );
};
