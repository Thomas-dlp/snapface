import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
   
  ],
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
})
export class CoreModule { }
