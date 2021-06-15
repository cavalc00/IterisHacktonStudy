import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogPost: BlogPostModel;

  constructor() {
    this.blogPost = new BlogPostModel();
    this.blogPost.titulo = 'Primeira Postagem!';
    this.blogPost.imagem = 'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png';
    this.blogPost.texto = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu odio pellentesque ullamcorper. Duis non ipsum mauris.Nullam dolor dui, sollicitudin sed erat et, venenatis tincidunt lectus.Quisque ut faucibusnisl. Maecenas maximus, dolor ac sagittis interdum, dolor arcu pharetra dui, non ultricies sem dolor nec lorem.Fusce tempor efficitur diam et scelerisque.Ut nunc nulla, semper a dignissim et, mollis in orci.';
  }

  ngOnInit(): void {
  }

}
