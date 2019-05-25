import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostUpdateService } from './shared/post-update.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule  //import HttpClientModule for child components to access http client
  ],
  providers: [PostUpdateService], //Injecting Post Service in appmodule 
  bootstrap: [AppComponent]
})
export class AppModule { }
