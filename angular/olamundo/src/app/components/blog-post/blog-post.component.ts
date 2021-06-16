import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input()
  public post: BlogPostModel = new BlogPostModel();


  constructor() { }

  public compartilhar(): void {

    // execute o que quiser aqui.

    // lembre-se que você pode alterar as variaveis locais

    alert('Post ' + this.post.titulo + ' compartilhado!');
    this.contar();
  }

  private contar(): void{
    this.post.contador++;
  }

  ngOnInit(): void {
  }

}
