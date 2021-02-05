import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRepoComponent } from './user-repo/user-repo.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
  { path: 'user-data', component: UserDataComponent },
  { path: 'user-repo', component: UserRepoComponent },
  { path: '**', component: NotFoundComponent },

  // Empty Paths
  { path: '', redirectTo: "/user-data", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
