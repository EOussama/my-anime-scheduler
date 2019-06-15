import { Injectable } from '@angular/core';

import { Settings } from '../models/settings';
import { Database } from '../models/database';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public settings: Settings;
  public database: Database;

  constructor() {
    this.settings = new Settings();
    this.database = new Database();
  }

  /**
   * Loads the data
   */
  public loadData(data: any): void {
    console.log('Started');
    this.settings.account.key = data.account.key;
    this.settings.account.username = data.account.username;
  }
}
