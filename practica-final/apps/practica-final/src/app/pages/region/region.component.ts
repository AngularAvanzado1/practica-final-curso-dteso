import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'libs/shared/api/src/lib/api/api.service';

@Component({
  selector: 'practica-final-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  code: any;
  regions: any[];
  data: any[];


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.code = params && params.code ? params.code : "";
    });
  }

  ngOnInit(): void {
    this.apiService.getRegions$(this.code).subscribe(res => {
      this.regions = res;
      this.data = this.regions[1];
    });
  }

  viewCountry(id: string) {
    this.router.navigate([`/country/${id}`]);
  }

}


