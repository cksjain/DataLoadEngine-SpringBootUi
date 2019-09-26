import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { URLSearchParams,Headers, RequestOptions } from '@angular/http';

import { User } from '../auth/user';
import { Env } from './env';

const endpoint = 'http://localhost:8080/';
const login_endpoint = 'login_request';
const soql_endpoint = 'soql_request';
const getAllObjects_endpoint='describe_all';
const getFields_endpoint='describe_obj';
const orgToOrg_endpoint='upload_records';
const getChildRecords_endpoint='child_records';

@Injectable({
  providedIn: 'root'
})

export class RestService {

constructor(private http: HttpClient) { }


login (user: User): Observable<any> {
	var headerOptions = {
	  headers: new HttpHeaders({
					'Content-Type' : 'application/json',
					'username' : user.email,
					'password' : user.password,
					'version' : '44.0',//user.api+'.0',
					'orgtype' : user.env.toUpperCase(),
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
	};
  	return this.http.post(endpoint + login_endpoint, '' ,headerOptions).pipe(
    tap((result) => console.log('Login Successful')),
    catchError(this.handleError<any>('addProduct'))
  );
}


soql_query (query: any): Observable<any> {
  var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				
				console.log(sessionData.baseURL);
	var headerOptions = {
	  headers: new HttpHeaders({
          'Content-Type' : 'application/json',
					'baseURL' : sessionData.baseURL,
					'version' : '44.0',//sessionData.version+'.0',
					'sessionId' : sessionData.sessionId,
					'query' :  query,
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
  };
  

  	return this.http.post(endpoint + soql_endpoint, '' ,headerOptions);
}


getAllOrgObjects (): Observable<any> {
  var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				
				console.log(sessionData.baseURL);
	var headerOptions = {
	  headers: new HttpHeaders({
          'Content-Type' : 'application/json',
					'baseURL' : sessionData.baseURL,
					'version' : '44.0',//sessionData.version+'.0',
					'sessionId' : sessionData.sessionId,
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
	};
  return this.http.post(endpoint + getAllObjects_endpoint, '' ,headerOptions);
}


//get details of field from Objects 

getFieldsOfObject (objectName: any): Observable<any> {
  var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				
				console.log(sessionData.baseURL);
	var headerOptions = {
	  headers: new HttpHeaders({
          'Content-Type' : 'application/json',
					'baseURL' : sessionData.baseURL,
					'version' : '44.0', //sessionData.version+'.0',
					'sessionId' : sessionData.sessionId,
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				}),
				params: {'objectName': objectName}
	};

	
  return this.http.post(endpoint + getFields_endpoint,'' ,headerOptions);
}


getExternalIdOfObject (objectName: any): Observable<any> {
	var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				  
				  console.log(sessionData.baseURL);
	  var headerOptions = {
		headers: new HttpHeaders({
			'Content-Type' : 'application/json',
					  'baseURL' : sessionData.baseURL,
					  'version' : '44.0', //sessionData.version+'.0',
					  'sessionId' : sessionData.sessionId,
					  "Access-Control-Allow-Credentials" : "true",
					  "Access-Control-Allow-Origin" : '*'
				  }),
				  params: {'objectName': objectName}
	  };
  
	  
	return this.http
					.post<any>(endpoint + getFields_endpoint,'' ,headerOptions)
					.pipe(map(rsp => rsp.fields.filter(field =>{ return field.name !='Id' && (field.externalId || field.idLookup); })));
  }


  getCreatableFieldsOfObject (objectName: any): Observable<any> {
	var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				  
				  console.log(sessionData.baseURL);
	  var headerOptions = {
		headers: new HttpHeaders({
			'Content-Type' : 'application/json',
					  'baseURL' : sessionData.baseURL,
					  'version' : '44.0', //sessionData.version+'.0',
					  'sessionId' : sessionData.sessionId,
					  "Access-Control-Allow-Credentials" : "true",
					  "Access-Control-Allow-Origin" : '*'
				  }),
				  params: {'objectName': objectName}
	  };
  
	  
	return this.http
					.post<any>(endpoint + getFields_endpoint,'' ,headerOptions)
					.pipe(map(rsp => rsp.fields.filter(field =>{ return field.createable; })));
  }


// upload or org to org objects.
orgtoOrgTransfer (nameOfObject: any, data: any): Observable<any> {
  var sessionData = JSON.parse(sessionStorage.getItem('env2'));
				
				console.log("baseURL", sessionData.baseURL, data);
	var headerOptions = {
	  headers: new HttpHeaders({
          'Content-Type' : 'application/json',
					'baseURL' : sessionData.baseURL,
					'version' : '44.0',//sessionData.version+'.0',
					'sessionId' : sessionData.sessionId,
					'objectName': nameOfObject,
					 'dataBody' : data,
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
	};
  return this.http.post(endpoint + orgToOrg_endpoint, '' ,headerOptions);
}



// child records .
getChildData (nameOfObject: any, id: any, relationName: any): Observable<any> {
  var sessionData = JSON.parse(sessionStorage.getItem('env1'));
				
				console.log(sessionData.baseURL);
	var headerOptions = {
	  headers: new HttpHeaders({
          'Content-Type' : 'application/json',
					'baseURL' : sessionData.baseURL,
					'version' : '44.0',//sessionData.version+'.0',
					'sessionId' : sessionData.sessionId,
					'objectName': nameOfObject,
					 'recordIds' : id,
					 'relationShipName': relationName,
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
	};
  return this.http.post(endpoint + getChildRecords_endpoint, '' ,headerOptions);
}




private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for env consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}