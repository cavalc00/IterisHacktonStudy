import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { FormsModule } from '@angular/forms';
import { FormPostComponent } from './components/form-post/form-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogPostComponent,
    FormPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
