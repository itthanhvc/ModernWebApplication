import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentComponent } from "./student/student.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent }   from "./error.component";

import { CheckProfileEmptyGuard } from "./profile/checkProfileEmpty.guard";
// import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'student', component: StudentComponent },
     { path: 'error', component: ErrorComponent },
    { path: 'profile', component: ProfileComponent, canActivate:[CheckProfileEmptyGuard]},
   // { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
