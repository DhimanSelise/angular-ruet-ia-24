import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  myReactiveForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit Called');
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl('', Validators.email),
      'skills': new FormArray([
        new FormControl('')
      ])
    });

  }

  onSubmit() {
    console.log(this.myReactiveForm.value)
  }

  addSkill() {
    this.myReactiveForm.get('skills').push(
      new FormControl('')
    )
  }

  removeSkill(idx: number) {
    this.myReactiveForm.get('skills').removeAt(idx);
  }

  ngOnDestroy() {
    // alert('Biday Prithibi')
    console.log('ngDestroy Called');
  }

  

}
