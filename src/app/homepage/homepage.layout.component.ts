import { ForumRetrieveController } from './../controllers/forum.retrieve.controller';
import { Component, OnInit } from "@angular/core";
import { Post } from '../models/post.model';

@Component({
  selector: "homepage-layout",
  templateUrl: "homepage.layout.component.html",
  styleUrls: ["homepage.layout.component.css"]
})

export class HomepageLayoutComponent {
  homepagePosts: Post[] = [];

  constructor(private frc: ForumRetrieveController) {}

  ngOnInit(): void {
    this.homepagePosts = this.frc.getRandomPosts();
  }
}
