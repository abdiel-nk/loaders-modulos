import { NgModule } from '@angular/core';
import {InformacionComponent} from './informacion.component';
import {RouterModule,Routes} from '@angular/router';



const routes :Routes =[
    { 
        path:'', 
        component:InformacionComponent
    }
];

@NgModule({
    declarations:[
        InformacionComponent
    ],
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class InformacionModule {}
