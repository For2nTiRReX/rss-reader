import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RssReaderOutputComponent } from './components/rss-reader-output/rss-reader-output.component';
import { RootRoutingModule } from './root-routing.module';
import { RssReaderInputComponent } from './components/rss-reader-input/rss-reader-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RssReaderOutputComponent,
    RssReaderInputComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
