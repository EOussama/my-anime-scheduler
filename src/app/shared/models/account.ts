/**
 * The accounts model
 */
export class Account {

  /**
   * Account state
   */
  private _confirmed: boolean = false;

  /**
   * Gets the account's state
   */
  public get confirmed(): boolean {
    return this._confirmed;
  }

  /**
   * Sets the account' state
   */
  public set confirmed(confirmed: boolean) {
    this._confirmed = confirmed;
  }

  /**
   * The MAL username
   */
  private _username: string = '';

  /**
    * Gets the account(s username)
    */
  public get username(): string {
    return this._username;
  }

  /**
    * Sets the account's username
    */
  public set username(username: string) {
    this._username = username;
  }

  /**
   * The confirmation key
   */
  private _key: string = '';

  /**
   * Returns the account's key
   */
  public get key(): string {
    return this._key.slice();
  }

  /**
   * Sets the account's key
   */
  public set key(key: string) {
    this._key = key;
  }
}
