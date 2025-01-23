import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent
{
  @Input() faceSnap!: FaceSnap;
  

  

  onSnapButton(){
   this.faceSnap.snapCountAction();
  }

}
