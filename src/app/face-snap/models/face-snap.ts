export class FaceSnap{
    private _location: string='';
    snaps: number=0;
    snapButtonText: string='Oh Snap!';
    constructor( public title: string,
                public description: string,
                public faceSnapURL: string = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                public createdAt: Date =new Date(),)
                {}
    
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
        this.snapButtonText="Oh Snap!";
    }

    private setAddSnapButtonText(){
        this.snapButtonText="Remove Snap!";
    }

    set location(location:string) {
        this._location=location;
    }
    
    get location(): string{
        return this._location;
    }
            
    }