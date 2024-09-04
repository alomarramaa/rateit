import { Forum } from './forum.model';
import { Post } from "./post.model";

export class Account {
    name: string;
    username: string;
    email: string;
    password: string;
    createdPosts: Post[];
    savedForums: Forum[]

    constructor(name: string, username: string, email: string, password: string, createdPosts: Post[], savedForums: Forum[]) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdPosts = createdPosts;
        this.savedForums = savedForums;
    }
}
