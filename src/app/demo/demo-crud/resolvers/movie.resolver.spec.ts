import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movieResolver } from './movie.resolver';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

describe('movieResolver', () => {
  const executeResolver: ResolveFn<Observable<Movie[]>> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => movieResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
