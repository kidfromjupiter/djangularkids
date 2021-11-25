import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SongListComponent } from './song-list/song-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SongOverviewComponent } from './song-overview/song-overview.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongAddComponent } from './song-list/song-add/song-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AboutComponent,
    SongListComponent,
    WelcomeComponent,
    SongOverviewComponent,
    SongEditComponent,
    SongAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
