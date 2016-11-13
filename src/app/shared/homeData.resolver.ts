import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router"
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class HomeDataResolver implements Resolve<any> {

    constructor(private _http: Http) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        console.log("in resolver")
       // return Observable.create(observer => {
       //     observer.next(['Aaron', 'Andrea', 'Reina', 'Bryce'])
       //     observer.complete()
       // })

        return this._http.get('https://randomuser.me/api/?page=3&results=5&seed=abc3')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.results || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}