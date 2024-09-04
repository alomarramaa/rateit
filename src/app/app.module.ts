import { PostComponent } from './homepage/post/post.card.component';
import { HomepageLayoutComponent } from './homepage/homepage.layout.component';
import { TopNavBar } from './navigation/top-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideDatabase, getDatabase } from "@angular/fire/database";
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { LoginAccountComponent } from './loginAccount/loginAccount.component';
import { CreateAccount } from './createAccount/createAccount.component';
import { UserProfileComponent } from './userProfile/user-profile.component';
import { StarredForums } from './starredForums/starred-forums.component';
import { LikedPost } from './likedPost/liked-post.component';
import { CreatePost } from './createPost/create-post.component';
import { UsersPostsComponent } from './usersPosts/usersPosts.component';
import { CreateForum } from './createForum/create-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAccountComponent,
    CreateAccount,
    UserProfileComponent,
    TopNavBar,
    HomepageLayoutComponent,
    PostComponent,
    StarredForums,
    LikedPost,
    CreatePost,
    UsersPostsComponent,
    CreateForum
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "master-rater-app"),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
