export class RssItem {

    title: string;
    content: string;
    link: string;
    addFields?: Object;

    constructor(
        title: string,
        content: string,
        link: string,
        addFields?: Object,
    ) {
        this.title = title;
        this.content = content;
        this.link = link;
        this.addFields = addFields ? addFields : {};
    }
}
