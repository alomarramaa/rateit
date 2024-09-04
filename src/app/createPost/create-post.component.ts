import { ForumRetrieveController } from './../controllers/forum.retrieve.controller';
import { Post } from './../models/post.model';
import { NgForm } from '@angular/forms';
import { ForumAlterController } from './../controllers/forum.alter.controller';
import { AccountAlterController } from './../controllers/account.alter.controller';
import { Component } from "@angular/core";

@Component({
  selector: "create-post",
  templateUrl: "create-post.component.html",
  styleUrls: ["create-post.component.css"]
})

export class CreatePost {
  constructor(private aac: AccountAlterController, private fac: ForumAlterController, private frc: ForumRetrieveController) {}

  ngOnInit(): void {
    console.log("Hello");
  }

  createPost(post: NgForm): void {
    if (!this.frc.forumExists(post.value.forumName)) {
      return;
    }

    let tempPost = new Post(post.value.forumName, post.value.title, post.value.description, "", "", 0, 0, []);

    this.aac.addPost(tempPost);
    this.fac.addPost(tempPost);
  }
}
