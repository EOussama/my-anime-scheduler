import { Account } from './account';

/**
 * The settings' model
 */
export class Settings {
  public account: Account;

  constructor() {
    this.account = new Account();
  }
}
