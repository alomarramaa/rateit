import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Forum } from "../models/forum.model";
import { Post } from '../models/post.model';

@Injectable({providedIn: "root"})
export class ForumRetrieveController {

  private forums: Forum[] = [];

  // Takes an instance of AngularFireDatabase
  // Initializes the forums list by subscribing to the Observable
  constructor(private db: AngularFireDatabase) {
    this.db.list<Forum>("Forums").valueChanges().subscribe(fs => {
      // iterating through forum observable
      fs.forEach(f => {
        // adding individual forums to forums list
        this.forums.push(f);
      })
    })
  }

  /**
   * Returns the list of forum objects from Firebase
   *
   * @returns A list of forums
   */
  getForums(): Forum[] {
    return this.forums
  }

  /**
   * Returns a forum from Firebase with the specified name
   *
   * @param forumName - The name of the forum
   * @returns A forum object
   */
  getForum(forumName: string): Forum | undefined {
    for (var forum of this.getForums()) {
      // attempts to verify forum based on name
      if (forum.name === forumName) {
        return forum;
      }
    }
    return undefined;
  }

  /**
   * Returns a post from Firebase with the specified forum and post names
   *
   * @param forumName - The name of the forum
   * @param postTitle - The name of the post
   * @returns A post object
   */
  getPost(forumName: string, postTitle: string): Post | undefined {
    const forum = this.getForum(forumName);

    // checks if forum has no posts
    if (forum?.posts === undefined) {
      return undefined;
    }

    for (var post of forum.posts) {
      // attempts to verify post based on title
      if (post.title === postTitle) {
        return post;
      }
    }
    return undefined;
  }

  /**
   * Returns whether or not a forum exists on the app
   *
   * @param name - The name of the forum
   * @returns A boolean determining existance of specified forum
   */
   forumExists(name: string): boolean {
    let flag = true;
    for (var forum of this.getForums()) {
      // attempts to verify forum based on name
      if (forum.name == name) {
        flag = true;
      }
    }
    return flag;
  }

  /**
   * Returns a post list from Firebase for the homepage
   *
   * @returns A post list
   */
  getRandomPosts(): Post[] {
    let tempList: Post[] = [
      new Post("Entertainment", "Before You Watch: The Batman", "Another reboot of a popular franchise...", "assets/post1-thebatman.jpeg", "", 0, 0, []),
      new Post("HipHop & Rap", "New Kendrick Lamar Album", "Super excited for the new album next week!", "assets/kdot-img.jpeg", "", 0, 0, []),
      new Post("Anime & Manga", "One Piece Chapter 1044", "Craziest chapter ever!!", "assets/gear-five.jpeg", "", 0, 0, [])
    ];

    console.log(this.forums);

    // says length is 0 even tho there is clearly data in this.forums
    // so data is hard coded for now
    for (var forum of this.forums) {
      // creates a random number within current forum's length
      let random = Math.floor(Math.random() * forum.posts.length);
      // adding this random post to tempList
      tempList.push(forum.posts[random]);
    }
    return tempList;
  }
}
