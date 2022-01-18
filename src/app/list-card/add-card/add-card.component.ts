import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  newPost: any;
  constructor(
    private apiService:ApiService,
    private route:ActivatedRoute,
    private fb:FormBuilder
    ) { }

    contentForm: FormGroup;
    saveId:number;
    paramId = 1
    dataId:any
    submitted = false;

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    const intString = Number(postId)
    this.saveId = intString

    this.contentForm = this.fb.group({
      'userId': [1],
      'title': ['', Validators.required],
      'body': ['', Validators.required]
    })

    if (intString) {
      this.apiService.getId(intString).subscribe(res => {
        this.dataId = res;
        this.contentForm.patchValue({
          title: this.dataId.title,
          body: this.dataId.body,
          id: this.dataId.id,
          userId: this.dataId.userId
        });
        console.log('data response', this.dataId);
      });
    }
  }

  message = '';

  onSubmit() {
    if (this.saveId) {  
      this.apiService.update(this.saveId, this.contentForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.contentForm.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  } else {
      this.apiService.addPost(this.contentForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
   
    
  }

}
