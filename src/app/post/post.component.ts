import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  posts: any[]=[];
  
  constructor(private server:ConnectionService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.server.getAllPosts().subscribe(
      (data) => {
        


        data.sort((a, b) => {
          const dateA = new Date(a.post_date);
          const dateB = new Date(b.post_date);
          return dateB.getTime() - dateA.getTime();
        });

        
        this.posts = data;
        // console.log(this.posts);
     
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isPastDate(dateString: string): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const postDate = new Date(dateString);

    const yesterday = new Date();
    yesterday.setHours(0, 0, 0, 0);
    yesterday.setDate(currentDate.getDate() - 1);
    
    
    
    return postDate < yesterday;
  }
  
}
