export class Post {
    forumName: string;
    title: string;
    description: string;
    img: string;
    postCreator: string;
    likes: number;
    dislikes: number;
    comments: string[];

    constructor(forumName: string, title: string, description: string, img: string, postCreator: string, likes: number, dislikes: number, comments: string[]) {
      this.forumName = forumName;
        this.title = title;
        this.description = description;
        this.img = img;
        this.postCreator = postCreator;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}
