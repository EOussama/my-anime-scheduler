import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class MalService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Checks if a username is that of a valid MAL account
   * 
   * @param username The username to validate
   */
  public isValid(username: string) {
    return this.httpClient.get(`${environment.jikanEndPoint}/user/${username}`);
  }

  /**
   * Confirms the owner of a MAL account
   * 
   * @param username The username to confirm the account for
   * @param key The confirmation key
   */
  public confirmAccount(username: string, key: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.httpClient.get(`${environment.jikanEndPoint}/user/${username}`)
        .toPromise()
        .then(res => {
          const location: string = res['location'];

          if (location.toLowerCase() === key.toLowerCase()) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          resolve(false);
        });
    });
  }
}
