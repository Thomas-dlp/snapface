import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { Form } from "@angular/forms";
import { map, Observable, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    
    constructor(private http: HttpClient){}
    
   
    

     getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps'); 
     }

    getFaceSnapById(id:number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`); 

    }
    snapFaceSnapById(id: number, snapType: 'snap'|'unsnap'): Observable<FaceSnap>{
       return this.getFaceSnapById(id).pipe(
        map(faceSnap =>({
            ...faceSnap,
            snaps: faceSnap.snaps +(snapType==='snap'? 1:-1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`,updatedFaceSnap))
       );
    }
   
    public addFaceSnap(formValue:{title: string, description: string, imageURL: string, location?:string}): Observable<FaceSnap>{
        
        return this.getAllFaceSnaps().pipe(
            map(facesnaps =>[...facesnaps].sort((a: FaceSnap, b: FaceSnap)=>(a.id-b.id))),
            map(sortedFacesnaps=>sortedFacesnaps[sortedFacesnaps.length-1]),
            map(previousFacesnap=>({
                ...formValue,
                snaps:0,
                createdDate: new Date(),
                id: previousFacesnap.id+1
            })),
            switchMap(newFacesnap=> this.http.post<FaceSnap>(`http://localhost:3000/facesnaps/`,newFacesnap))
        );
    }

    
    
}