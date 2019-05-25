import { Component, OnInit } from '@angular/core';
import { PostUpdateService } from 'src/app/shared/post-update.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private service : PostUpdateService) { }

  ngOnInit() { 
    this.service.refreshList; //calling refreshList function from PostUpdate service 

  }

}
