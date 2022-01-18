import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  lists: any
  dataCard: any
  constructor(private  apiService:ApiService) { }

  ngOnInit(){
    this.apiService.get('posts?userId=1').subscribe(res => {
      this.lists = res;
      console.log('data response', this.lists);
    });
    // this.cek()
  }

// cek() {
//   let aa = this.apiService.get('posts/2').subscribe(res=> {
//     this.lists =res;
//     console.log('data response post 1', this.lists);
//   })
// }
}  
