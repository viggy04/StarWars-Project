import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DemoSwService } from 'src/app/services/demo-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: DemoSwService, private router: Router) { }


  ngOnInit(): void {
    this.getPaginatedData(1);
    // this.service.demoObs.subscribe((data:any)=>{
    //   console.log(data);
    // })
  }

  url = 'https://swapi.dev/api/people';
  // url = 'https://swapi.dev/api/people/?page=3';


  // testObs: Observable<any> = this.getFinalData()
  // finalArrOfChars: any = [];  //contains values from paginated api

  // getFinalData(): Observable<[]> {
  //   return this.http.get(`${this.url}`).pipe(map((data: any) => {
  //     // console.log(data.results);
  //     // console.log(data.next);
  //     return data.results;
  //   })
  //   )
  // }

  //pagination code

  starWarPaginatedObs!: Observable<any>;
  getPaginatedData(pageno: number) {
    this.starWarPaginatedObs = this.service.getSw(pageno);
    this.service.DemoBSubject.next(21);
  }

  onPageChange(pageno: number) {
    this.getPaginatedData(pageno);
    console.log(pageno);
  }

  forkJ(){
    this.service.testMethod().subscribe((data:any)=>{
      console.log(data);
    })
  }


}
