export class RssItem {

    title: string;
    content: string;
    author: string;
    link: string;
    pubDate?: string;
    id?: string;
    contentSnippet?: string;

    constructor(
        title: string,
        content: string,
        author: string,
        link: string,
        pubDate?: string,
        id?: string,
        contentSnippet?: string,
    ) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.link = link;
        this.pubDate = pubDate ? pubDate : '';
        this.id = id ? id : '';
        this.contentSnippet = contentSnippet ? contentSnippet : '';
    }
}
