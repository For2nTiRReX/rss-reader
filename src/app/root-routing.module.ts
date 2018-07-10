import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RssReaderOutputComponent} from './components/rss-reader-output/rss-reader-output.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule { }
