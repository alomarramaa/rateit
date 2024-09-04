import { Account } from "./account.model";
import { Post } from "./post.model";

export class Forum {
    name: string;
    description: string;
    dateCreated: string;
    users: Account[]
    posts: Post[]

    constructor(name: string, description: string, dateCreated: string, users: Account[], posts: Post[]) {
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
        this.users = users;
        this.posts = posts;
    }
}
