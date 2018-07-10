import { Component, OnInit } from '@angular/core';
import { RssParserService } from '../../services/rss-parser.service';
import {Observable} from 'rxjs';
import {RssItem} from '../../models/rss-item';


@Component({
  selector: 'rss-reader-rss-reader-output',
  templateUrl: './rss-reader-output.component.html',
  styleUrls: ['./rss-reader-output.component.scss']
})
export class RssReaderOutputComponent implements OnInit {

  public rssCollection: Array<RssItem>;
  constructor(private rssParser: RssParserService) { }

  ngOnInit() {
    this.rssParser.$recipeSubscription.subscribe(
       item => {
           this.rssCollection = item.items;
       }
    );
  }

}
