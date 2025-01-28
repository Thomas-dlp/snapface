import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    faceSnaps:FaceSnap[] =[ new FaceSnap('First instance', 'First description'),
        new FaceSnap('Second instance', 'Second description').withLocation('à la montagne.')];
    
    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }

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
   
}