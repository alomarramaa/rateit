import { NgForm } from '@angular/forms';
import { ForumAlterController } from './../controllers/forum.alter.controller';
import { Component } from "@angular/core";
import { Forum } from '../models/forum.model';

@Component({
  selector: "create-forum",
  templateUrl: "create-forum.component.html",
  styleUrls: ["create-forum.component.css"]
})

export class CreateForum {

  constructor(private fac: ForumAlterController) {
    // Intentially left blank
  }

  createForum(forum: NgForm) {
    console.log(forum.value.name);

    let date = new Date();
    let dateCreated = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();

    this.fac.pushForum(new Forum(forum.value.name, forum.value.description, dateCreated, [], []));
  }
}
