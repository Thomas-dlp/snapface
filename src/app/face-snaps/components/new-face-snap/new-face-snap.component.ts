import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { FaceSnap } from '../../../core/models/face-snap';
import { map, Observable, tap } from 'rxjs';
import { timeoutProvider } from 'rxjs/internal/scheduler/timeoutProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  imports: [
    ReactiveFormsModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!:FormGroup;
  faceSnapsPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;
  newFaceSnap!: FaceSnap;

  constructor(private formBuilder: FormBuilder,
     private faceSnapsService: FaceSnapService,
     private router: Router){}
 
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm= this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageURL: [null, [Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
    },{
      updateOn:'blur'
    })
    this.faceSnapsPreview$=this.snapForm.valueChanges.pipe(
      map(formValue=>({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps:0,
      }))
    );  
  }

  onSubmitForm(){ 
   this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
    tap((addedFacesnap)=>this.router.navigateByUrl(`/facesnaps/${addedFacesnap.id}`))
   ).subscribe();
  }
}