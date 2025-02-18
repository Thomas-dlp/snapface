import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
 
  faceSnaps!:FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  
  constructor(private faceSnapsService: FaceSnapService){}
  
  ngOnInit(): void{
   this.faceSnaps$= this.faceSnapsService.getAllFaceSnaps();
    
  }

}
