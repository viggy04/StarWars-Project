import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { BehaviorSubject, forkJoin, map, mergeMap, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoSwService {

  DemoBSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  demoObs: Observable<any> = this.DemoBSubject.asObservable();

  constructor(private http: HttpClient) { }

  getChars() {
    return this.http.get('https://swapi.dev/api/people');
  }

  getFilms() {
    return this.http.get('https://swapi.dev/api/films');
  }

  testMethod(): Observable<any> {
    let combinedResults: any = ['https://swapi.dev/api/people', 'https://swapi.dev/api/films', 'https://swapi.dev/api/vehicles'];
    return forkJoin(combinedResults.map((data: any) => {
      console.log(data);
      return this.http.get(data);
    }));
  }

  //pagination code 
  // getSw(pageno: number): Observable<any> {
  //   return this.demoObs.pipe(mergeMap((data: any) => {
  //     console.log(data);
  //     return this.http.get('https://swapi.dev/api/people/?page=' + pageno).pipe(map((data: any) => {
  //       return data.results;
  //     }))
  //   }))

  // }

  getSw(pageno: number): Observable<any> {

    return this.http.get('https://swapi.dev/api/people/?page=' + pageno).pipe(map((data: any) => {
      return data.results;
    }))
  }

}
