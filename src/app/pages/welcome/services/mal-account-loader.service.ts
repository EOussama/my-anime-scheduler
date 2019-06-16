import { Subject, Observable } from 'rxjs';

export class MalAccountLoaderService {

  /**
   * The observable subject
   */
  private subject: Subject<string> = new Subject<string>();

  /**
   * Returns the MAL loader observable
   */
  public loadMALAccount(): Observable<string> {
    return this.subject.asObservable();
  }

  /**
   * Signals any subscribers for the loaded MAL account
   * 
   * @param accountLoaded Whether or not the MAL account has been loaded successfully
   */
  public onMALAccountLoaded(accountLoaded: string): void {
    this.subject.next(accountLoaded);
  }
}
