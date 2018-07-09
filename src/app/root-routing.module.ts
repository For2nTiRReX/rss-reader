import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RssReaderOutputComponent} from './components/rss-reader-output/rss-reader-output.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'game',
    //     canActivate: [ PlayerAuthGuardService ],
    //     component: PlayGameComponent
    // },
    // { path: 'top-players', component: TopPlayersComponent },
    // { path: 'login', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule { }
