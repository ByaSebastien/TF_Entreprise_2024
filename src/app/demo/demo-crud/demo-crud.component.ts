import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-crud',
  templateUrl: './demo-crud.component.html',
  styleUrls: ['./demo-crud.component.scss']
})
export class DemoCrudComponent {

  movies!: Movie[]

  constructor(
    private readonly _ar: ActivatedRoute
    // private readonly _movieService: MovieService,
  ) {
    this._ar.data.subscribe(
      (datas: any) => {
        this.movies = datas.mr;
        console.log(this.movies);
      }
    )
    // this._movieService.getAll().subscribe({
    //   next: (datas: Movie[]) => {
    //     this.movies = datas;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })
  }
}
