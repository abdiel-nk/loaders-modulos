import { NgModule } from '@angular/core';
import {ContactoComponent} from './contacto.component';
import {RouterModule,Routes} from '@angular/router';



const routes :Routes =[
    { 
        path:'', 
        component:ContactoComponent
    }
];

@NgModule({
    declarations:[
        ContactoComponent
    ],
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class ContactoModule {}
