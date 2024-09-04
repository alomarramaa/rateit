import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Account } from "../models/account.model";
import { Post } from "../models/post.model";


@Injectable({providedIn: "root"})
export class AccountAlterController {

    constructor(private db: AngularFireDatabase) {
    }

    pushAccountInfo(account: Account) {
      this.db.list<Account>("Accounts").push(account);
    }

    addPost(post: Post) {
      //Still needs to be written
    }
}
