import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginForm, UserToken } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _$currentUser: BehaviorSubject<UserToken | undefined>

  constructor(
    private readonly _http: HttpClient
  ) {
    this._$currentUser = new BehaviorSubject<UserToken | undefined>(undefined);
  }

  get currentUser(): UserToken | undefined {
    return this._$currentUser.value;
  }

  get $currentUser(): Observable<UserToken | undefined> {
    return this._$currentUser.asObservable();
  }

  login(form: LoginForm) {
    return this._http.post<UserToken>('http://localhost:3000/login', form).pipe(
      tap((data: UserToken) => {
        this._$currentUser.next(data);
      })
    )
  }

}
