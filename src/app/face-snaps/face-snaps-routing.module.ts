import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { AuthGuard } from "../core/guards/auth.guards";

const routes: Routes=[
    {path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
    {path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]},
    {path: '', component: FaceSnapListComponent, canActivate: [AuthGuard]},
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class FaceSnapRoutingModule{}