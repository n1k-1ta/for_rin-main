export class ArticleDto {
    title;
    body;
    constructor(model) {
        this.title = model.title;
        this.body = model.body;
    }
}