import { Injectable } from '@angular/core';
import { RssItem } from '../models/rss-item';
import { RssFeed } from '../models/rss-feed';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

declare var RSSParser: any;

@Injectable({
  providedIn: "root"
})
export class RssParserService {

  parser: any;
  CORS_PROXY: string;
  $recipeSubscription: Subject<any> = new Subject();
  isRequestAvailable: boolean;

  constructor() {
      this.parser = new RSSParser();
      this.CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      this.isRequestAvailable = true;
      // this.getRssFeed('https://www.reddit.com/.rss');
      // 'https://www.nasa.gov/rss/dyn/NASA-in-Silicon-Valley.rss'
      // 'https://www.reddit.com/.rss'
  }

  public getRssFeed(url: string) {
      if ( !this.isRequestAvailable ) { return; }
      this.isRequestAvailable = false;
      let rssFeed: RssFeed;
        this.parser.parseURL(this.CORS_PROXY + url, (err, feed) => {
            if (feed.title && feed.feedUrl && feed.link) {
                rssFeed = new RssFeed(feed.title, feed.feedUrl, feed.link);
                if (feed.items) {
                  rssFeed.items = feed.items.map(feedItem => {
                    const addFields = {};
                    Object.keys(feedItem).map((objectKey) => {
                        const value = feedItem[objectKey];
                        if ( objectKey === 'title' || objectKey === 'content' || objectKey === 'link' ) {
                            return;
                        }
                        addFields[objectKey] = value;
                    });
                    return new RssItem( feedItem.title, feedItem.content, feedItem.link, addFields );
                  });
                }
            }
            this.$recipeSubscription.next(rssFeed);
            this.isRequestAvailable = true;
        });
      return this.$recipeSubscription;
  }
}
