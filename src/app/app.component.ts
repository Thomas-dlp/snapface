import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { filter, interval, map, Observable, take, tap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapService } from './services/face-snaps.service';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    CommonModule
   
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[]
constructor(private faceSnapServices:FaceSnapService){}


  ngOnInit(): void {
   this.faceSnaps=this.faceSnapServices.getFaceSnaps();
interval(1000).pipe(
  take(3),
  tap(console.log),
).subscribe();
  }
 
logger(text:string){
  console.log(`Log: ${text}`);
}
}
