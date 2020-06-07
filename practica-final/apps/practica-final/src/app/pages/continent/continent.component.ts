import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../../../../libs/shared/api/src/lib/api/api.service"
import { Router } from '@angular/router';

@Component({
  selector: 'practica-final-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  continents: Array<any>;
  data: Array<any>;

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {

  }

  ngOnInit() {
    this.apiService.getContinents$().subscribe(res => {
      this.continents = res;
      this.data = this.continents[1].filter(elem => elem.id);
    });
  }

  viewRegions(code: string) {
    this.router.navigate([`/region/${code}`]);
  }

}
