import { Component, OnInit } from '@angular/core';
import { PostUpdateService } from 'src/app/shared/post-update.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service : PostUpdateService) { 
    
  }

  ngOnInit() {
  }

}
