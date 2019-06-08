import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MalAccountLoaderService {

  /**
   * The observable subject
   */
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  /**
   * Returns the MAL loader observable
   */
  public loadMALAccount(): Observable<boolean> {
    return this.subject.asObservable();
  }

  /**
   * Signals any subscribers for the loaded MAL account
   * 
   * @param result Whether or not the MAL account has been loaded successfully
   */
  public onMALAccountLoaded(result: boolean): void {
    this.subject.next(result);
  }
}
