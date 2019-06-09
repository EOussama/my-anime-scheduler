import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MalService {

  constructor(private httpClient: HttpClient) { }

  public isValid(username: string) {
    return this.httpClient.get(`${environment.jikanEndPoint}/user/${username}`);
  }
}
