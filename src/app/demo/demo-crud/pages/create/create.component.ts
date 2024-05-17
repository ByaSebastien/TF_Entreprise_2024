import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form: FormGroup;

  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      title: [null, [Validators.required, Validators.maxLength(100)]],
      actor: [null, [Validators.required]]
    })
  }

  onSubmit() {

    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this._movieService.create(this.form.value).subscribe({
      next: (data) => {
        this._router.navigate(['demo/movies']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
