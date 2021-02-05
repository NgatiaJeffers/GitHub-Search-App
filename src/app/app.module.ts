import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserRepoComponent } from './user-repo/user-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    SearchBarComponent,
    NotFoundComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
