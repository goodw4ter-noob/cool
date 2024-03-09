import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UntilDestroy,
  untilDestroyed,
} from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private readonly httpService: HttpClient) {}

  public getUsers(): void {
    this.httpService
      .get('http://localhost:5059/WeatherForecast/GetWeatherForecast')
      .pipe(untilDestroyed(this))
      .subscribe(data => console.log(data));
  }
}
