import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit {
  public novaPublicacao: BlogPostModel = new BlogPostModel();
  @Output() post = new EventEmitter();


  constructor() {

  }

  ngOnInit(): void {}


  clicar(): void {
    this.post.emit(this.novaPublicacao);
  }
}
