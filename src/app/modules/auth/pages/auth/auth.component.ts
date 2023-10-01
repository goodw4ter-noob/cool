import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/modules/api/auth.api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly authApiService: AuthApiService
  ) {}

  public ngOnInit(): void {
    this.authApiService.getUsers();
  }
}
