import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
    
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:FaceSnap[];
  constructor(private faceSnapsService: FaceSnapService){
    console.log(this.faceSnapsService.getFaceSnaps());
  }
  
  ngOnInit(): void{
   this.faceSnaps= this.faceSnapsService.getFaceSnaps();
    console.log(this.faceSnaps);
    
  }

}
