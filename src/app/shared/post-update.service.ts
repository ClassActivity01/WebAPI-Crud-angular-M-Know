import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
import { PostUpdate } from './post-update.model'; 

@Injectable({
  providedIn: 'root'
})
export class PostUpdateService { 
  
 list : PostUpdate[] ;
 readonly rootURL = "http://localhost:55144/api/";  //base url stored in variable TO ACCESS api

  constructor(private http: HttpClient) { } 

  refreshList(){
    this.http.get(this.rootURL+'/Post_Update') //get function to return updates from API using observable 
      .toPromise().then(res => this.list = res as PostUpdate[] ) //save collection return from Post_Update in List & cst as PosUpdate array
  }

}
