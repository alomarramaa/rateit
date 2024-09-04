import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountRetrieveController {

  accounts: Account[] = [];

  // Takes an instance of AngularFireDatabase
  // Initializes the accounts list by subscribing to the Observable
  constructor(private db: AngularFireDatabase) {
    // subscribing to accounts Observable
    this.db.list<Account>("Accounts").valueChanges().subscribe(accounts => {
      // iterating through account observable
      accounts.forEach(acc => {
        // adding individual accounts to accounts list
        this.accounts.push(acc);
      })
    })
  }

  /**
   * Returns a list of account objects that makes iteration of all forums simpler and more legible
   *
   * @returns A list of accounts from Firebase
   */
  getAccounts(): Account[] {
    return this.accounts;
  }

  /**
   * Returns an account from Firebase with the specified username
   *
   * @param username - The username of the account
   * @returns An account object
   */
  getAccount(username: string): Account | undefined {
    for (var account of this.getAccounts()) {
      // attempts to verify account based on username
      if (account.username == username) {
        return account;
      }
    }
    return undefined;
  }

  /**
   * Returns an account's password with the specified email
   *
   * @param email - The email of the account
   * @returns A string literal of the password
   */
  getAccountPassword(email: string): string {
    for (var account of this.getAccounts()) {
      // attempts to verify password based on email addr
      if (account.email === email) {
        return account.password;
      }
    }
    return "";
  }

  /**
   * Returns whether or not an account exists on the app
   *
   * @param email - The email of the account
   * @returns A boolean determining existance of specified account
   */
  userExists(email: string): boolean {
    let flag = true;
    for (var account of this.getAccounts()) {
      // attempts to verify account based on email addr
      if (account.email == email) {
        flag = true;
      }
    }
    return flag;
  }

  /**
   * Returns a post from Firebase with the specified username and post name
   *
   * @param username - The username of the account
   * @param postTitle - The title of the post
   * @returns A post object
   */
  getPost(username: string, postTitle: string): Post | undefined {
    const account = this.getAccount(username);

    // checks if user has no posts
    if (account?.createdPosts === undefined) {
      return undefined;
    }

    for (var post of account?.createdPosts) {
      // attempts to verify post based on title
      if (post.title === postTitle) {
        return post;
      }
    }
    return undefined
  }
}
