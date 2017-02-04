import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { db } from '../services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnDestroy {
  private subscription: Subscription;
  student: any;
  constructor(private activatedRoute: ActivatedRoute, private db: db) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.student = db.getDataById(param['id']);
        console.log(param);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
