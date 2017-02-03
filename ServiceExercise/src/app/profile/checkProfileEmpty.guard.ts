import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { db } from '../services/db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckProfileEmptyGuard implements CanActivate {
  constructor(private router: Router, private db: db) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (route.queryParams["id"] == null || this.db.getDataById(route.queryParams['id']) == null) {
      this.router.navigate(['error']);;
      return false;
    }

    return true;
  }
}
