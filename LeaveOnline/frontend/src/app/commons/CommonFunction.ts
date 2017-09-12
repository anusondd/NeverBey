
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { CommonOptions } from "app/commons/CommonOptions";
import { DropdownOptions } from "app/commons/auto-complete-dropdown/DropdownOptions";
import { TableOptions } from "app/commons/table/TableOptions";
import 'rxjs/add/operator/toPromise';

let headers = new Headers({'Content-Type':'application/json'});
let options = new RequestOptions({headers:headers});

export class CommonFunction {

    constructor(private _http : Http) { }
    
    post(commonOptions: CommonOptions){
        return this._http.post(commonOptions.path,commonOptions.data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    postDropdown(commonOptions:DropdownOptions<any>){
        return this._http.post(commonOptions.path,commonOptions.postData, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    postTable(tableOptions:TableOptions<any>){
        return this._http.post(tableOptions.path,tableOptions.lazyLoadEvents, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }


    extractData(res: Response){
        let body =res.json();
        return body || {};
    }
    
    handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

}
