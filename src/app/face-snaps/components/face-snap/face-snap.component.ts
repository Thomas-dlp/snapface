import { Component,  Input,  OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [
    TitleCasePipe,
    
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent 
{
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router){}

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
