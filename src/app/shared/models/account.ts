/**
 * The accounts model
 */
export class Account {

  /**
   * The MAL username
   */
  private _username: string = '';

  /**
   * The confirmation key
   */
  private _key: string = '';

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
