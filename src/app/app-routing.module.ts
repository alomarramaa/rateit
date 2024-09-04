import { UserProfileComponent } from './userProfile/user-profile.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccount } from './createAccount/createAccount.component';
import { LoginAccountComponent } from './loginAccount/loginAccount.component';
import { HomepageLayoutComponent } from './homepage/homepage.layout.component';
import { StarredForums } from './starredForums/starred-forums.component';
import { LikedPost } from './likedPost/liked-post.component';
import { CreatePost } from './createPost/create-post.component';
import { UsersPostsComponent } from './usersPosts/usersPosts.component';
import { CreateForum } from './createForum/create-forum.component';

const routes: Routes = [
  {path: "", component: LoginAccountComponent},
  {path: "create-account", component: CreateAccount},
  {path: "user-profile", component: UserProfileComponent},
  {path: "home", component: HomepageLayoutComponent},
  {path: "my-profile", component: UserProfileComponent},
  {path: "starred-forums", component: StarredForums},
  {path: "liked-post", component: LikedPost},
  {path: "create-post", component: CreatePost},
  {path: "my-posts", component: UsersPostsComponent},
  {path: "create-forum", component: CreateForum}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
