import { Injectable } from '@angular/core';

import { Account } from '../models/account';
import { Database } from '../models/database';
import { Settings } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public account: Account;
  public database: Database;
  public settings: Settings;

  constructor() {
    this.account = new Account();
    this.database = new Database();
    this.settings = new Settings();
  }

  /**
   * Loads the data
   */
  public loadData(data: any): void {
    this.account.key = data.account.key;
    this.account.username = data.account.username;
  }

  /**
   * Saves the data
   */
  public saveData(): void {
    const db = {
      account: {
        username: this.account.username,
        key: this.account.key
      }
    };

    this.database.saveData(db);
  }
}
