import { RssItem } from './rss-item';

export class RssFeed {
    title: string;
    feedUrl: string;
    link: string;
    items?: Array<RssItem>;

    constructor(
        title: string,
        feedUrl: string,
        link: string,
        items?: Array<RssItem>
    ) {
        this.title = title;
        this.feedUrl = feedUrl;
        this.link = link;
        this.items = items;
    }
}
