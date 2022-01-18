import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  lists: any;

  constructor(private apiService:ApiService) {  
   }

  @Input()
  card!: { id: number; title: string; body: string; };

  ngOnInit(): void {
    this.apiService.get('posts?userId=1').subscribe(res => {
      this.lists = res;
    });
  }
}

