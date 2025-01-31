import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { Form } from "@angular/forms";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    faceSnaps:FaceSnap[] =[ new FaceSnap('First instance', 'First description'),
        new FaceSnap('Second instance', 'Second description').withLocation('à la montagne.')];
    
    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }

    // getAllFaceSnaps(): Observable<FaceSnap[]>{
    //     return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps'); 
    // }

    getFaceSnapById(id:string): FaceSnap{
        const foundFaceSnap = this.faceSnaps.find(x =>x.id===id);
        if(!foundFaceSnap){
            throw new Error('Face Snap not found');
        }
        return foundFaceSnap;
    }
    snapFaceSnapById(id: string): void{
        this.getFaceSnapById(id).snapCountAction();
    }
   
    public addFaceSnap(formValue:{title: string, description: string, imageURL: string, location?:string}): void{
        
        const faceSnap= new FaceSnap(
            formValue.title,
            formValue.description,
            formValue.imageURL
        )
        faceSnap.id=this.faceSnaps[this.faceSnaps.length-1].id + 1;
        faceSnap.location=formValue.location? formValue.location:"";
        this.faceSnaps.push(faceSnap);
    }

    public getLastSnapID(): string {
      console.log(this.faceSnaps[this.faceSnaps.length-1].id)
        return this.faceSnaps[this.faceSnaps.length-1].id ;
    }
}