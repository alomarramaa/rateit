import { Post } from './../models/post.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { Forum } from '../models/forum.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class ForumAlterController {

  constructor(private db: AngularFireDatabase) {

  }

  pushForum(forum: Forum) {
    this.db.list<Forum>("Forums").push(forum);
  }

  addPost(post: Post) {
    // Still needs to be written

  }
}
