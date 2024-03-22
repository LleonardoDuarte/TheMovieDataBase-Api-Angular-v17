import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  // http = inject(HttpClient);
  private postService = inject(PostService);
  posts: any = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  // Aqui criei localmente para testar
  // fetchPosts() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .subscribe((posts: any) => {
  //       console.log(posts);
  //       this.posts = posts;
  //     });
  // }

  //Aqui criei da forma que podemos trazer do server
  // loadPosts() {
  //   this.postService.getPosts().subscribe((posts: any) => {
  //     console.log(posts);
  //     this.posts = posts;
  //   });
  // }

  // aqui já usamos a função de next que é uma forma mais interessante de aplicação
  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
        this.posts = posts;
        console.log('Posts fetched successfully');
      },
      error: (error) => console.log('Error fetching posts', error),
    });
  }
}
