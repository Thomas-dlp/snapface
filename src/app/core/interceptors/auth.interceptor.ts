import { HttpHeaders, HttpInterceptorFn } from "@angular/common/http"
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";


export const authInterceptor: HttpInterceptorFn=(req,next)=>{
  const authService= inject(AuthService); 
  const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${authService.getToken()}`);
  const modifiedReq = req.clone({ headers });

  return next(modifiedReq);
  
} 

 