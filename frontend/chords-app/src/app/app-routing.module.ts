
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { SongListComponent } from './song-list/song-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SongOverviewComponent } from './song-overview/song-overview.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'songlist', component: SongListComponent},
  {path: 'songlist', component: SongOverviewComponent, outlet:"outlet2"},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
