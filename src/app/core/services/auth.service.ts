import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    private token!: string;
    
    login():void{
        this.token='MyFakeToken';
    }
    public  getToken(): string{
        return this.token;
    }

}

