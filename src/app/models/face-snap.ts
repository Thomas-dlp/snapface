export class FaceSnap{
    
   
    private _snapButtonText: string='Oh Snap!';
    

    constructor(
                public id: number = +crypto.randomUUID(),
                public title: string,
                public description: string,
                public imageUrl: string = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                public createdAt: Date =new Date(),
                public snaps: number=0,
                public location: string=""
            ){
                    
                }
    
    snapCountAction():void{
        if(this.snaps==0){
            this.addSnap();
            this.setAddSnapButtonText();
        }
        else{
            this.removeSnap();
            this.setRemoveSnapButtonText();
        }
    }            
    private addSnap(): void{
        this.snaps++;
    }
    
    private removeSnap(): void{
        this.snaps--;
    }
    
    private setRemoveSnapButtonText(){
        this._snapButtonText="Oh Snap!";
    }

    private setAddSnapButtonText(){
        this._snapButtonText="Remove Snap!";
    }
public getSnapButtonText():string {return this._snapButtonText;}  
    

    withLocation(location: string): FaceSnap{
        this.location=location;
        return this;
    }
    
   
            
    }