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
    this.account.confirmed = data['account']['confirmed'];
    this.account.username = data['account']['username'];
    this.account.key = data['account']['key'];
  }

  /**
   * Saves the data
   */
  public saveData(): void {
    const db = {
      account: {
        confirmed: this.account.confirmed,
        username: this.account.username,
        key: this.account.key
      }
    };

    this.database.saveData(db)
      .then(() => {
        console.info('[MAS] Data saved!');
      });
  }
}
