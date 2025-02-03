import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { CommonModule, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgClass,
    TitleCasePipe,
    DatePipe,
    CommonModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit
{

  faceSnap$!: Observable<FaceSnap>;
  buttonText: string= "Oh Snap!"

  constructor(private faceSnapsServices: FaceSnapService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
     const faceSnapId = this.route.snapshot.params['id'];
     this.faceSnap$=this.faceSnapsServices.getFaceSnapById(faceSnapId);
  }   

  onSnapButton(faceSnapId: number){
    if(this.buttonText==='Oh Snap!')
    {
      // Direct assignation. Subscription by html.
      this.faceSnap$=this.faceSnapsServices.snapFaceSnapById(faceSnapId,'snap').pipe(
        tap(()=>this.buttonText='Oops, unsnap!')     
      );
      
    }else
    { 
      // pipe asssignation. Method subscription.
      this.faceSnapsServices.snapFaceSnapById(faceSnapId,'unsnap').pipe(
        tap(()=>{
          this.faceSnap$= this.faceSnapsServices.getFaceSnapById(faceSnapId);
          this.buttonText='Oh Snap!';
        })
      ).subscribe();
    }
  
  }
  onReturnButton() {
    this.router.navigateByUrl('facesnaps');
    }
}
