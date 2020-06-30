import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from "libs/shared/api/src/lib/api/api.service"
import { Router } from '@angular/router';

@Component({
  selector: 'practica-final-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinentComponent implements OnInit {
  title = 'CONTINENTS';
  continents: Array<any>;
  data: Array<any>;

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.apiService.getContinents$().subscribe(res => {
      this.continents = res;
      this.data = this.continents[1].filter(elem => elem.id);
      this.cdr.detectChanges();
    });
  }

  viewRegions(code: string) {
    this.router.navigate([`/region/${code}`]);
  }

}
