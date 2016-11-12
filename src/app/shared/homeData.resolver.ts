import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router"
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HomeDataResolver implements Resolve<any> {

    constructor() {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        console.log("in resolver")
        return Observable.create(observer => {
            observer.next(['Aaron', 'Andrea', 'Reina', 'Bryce'])
            observer.complete()
        })
    }

}