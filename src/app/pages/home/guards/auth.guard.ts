import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { CoreService } from 'src/app/shared/services/core.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private core: CoreService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.core.account.confirmed;
  }
}
