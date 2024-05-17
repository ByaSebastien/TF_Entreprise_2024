import { Component } from '@angular/core';
import { UserToken } from 'src/app/demo/demo-crud/models/user';
import { AuthService } from 'src/app/demo/demo-crud/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  currentUser: UserToken | undefined

  constructor(
    private readonly _authService: AuthService
  ) {
    _authService.$currentUser.subscribe((data) => {
      this.currentUser = data;
    })
  }
}
