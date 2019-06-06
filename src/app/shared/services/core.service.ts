import { Injectable } from '@angular/core';

import { Settings } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  settings: Settings;

  constructor() { }
}
