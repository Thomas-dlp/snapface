import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    FormsModule
    
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router:Router){}

  userEmail!: string;
  userAge!: number;

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
  }

  onLandingClick(): void{
  this.router.navigateByUrl('facesnaps')
}
}
