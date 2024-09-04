import { Component, Input } from "@angular/core";

@Component({
  selector: "post-component",
  templateUrl: "post.card.component.html",
  styleUrls: ["post.card.component.css"]
})

export class PostComponent {
  @Input() forumName: string;
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;
  @Input() likes: number;
  @Input() dislikes: number;

  constructor() {
  this.forumName = "Entertainment"
   this.title = "Before You Watch: The Batman";
   this.description = "Once again another reboot of a popular franchise..."
   this.img = "assets/post1-thebatman.jpeg"
   this.likes = 0;
   this.dislikes = 0;
  }
}
