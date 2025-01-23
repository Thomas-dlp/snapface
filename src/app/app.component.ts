import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './face-snap/models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faceSnaps!:FaceSnap[];
  myFirstSnap!: FaceSnap;
  mySecondSnap!: FaceSnap;

  ngOnInit(): void{
    this.faceSnaps=[ new FaceSnap('First instance', 'First description'),
      new FaceSnap('Second instance', 'Second description')]
    
    this.faceSnaps[1].location='A la montagne';
    
  }
}
