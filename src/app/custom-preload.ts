
import { Injectable } from '@angular/core';
import { PreloadingStrategy,Route} from '@angular/router'
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy{


preload(route:Route, load:()=> Observable<any>):Observable<any>{

    if( route.data  && route.data.preload){
        return load();
    }else{
        return of(null)
    }
}

}