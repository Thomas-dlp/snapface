import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit
{

  faceSnap!: FaceSnap;

  constructor(private faceSnapsServices: FaceSnapService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapsServices.getFaceSnapById(faceSnapId);
  }   

  onSnapButton(){
   this.faceSnap.snapCountAction();
   console.log(this.faceSnap);
  }
  onReturnButton() {
    this.router.navigateByUrl('facesnaps');
    }
}
