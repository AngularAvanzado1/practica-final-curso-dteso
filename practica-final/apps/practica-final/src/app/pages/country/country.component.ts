import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'libs/shared/api/src/lib/api/api.service';

@Component({
  selector: 'practica-final-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  id;
  country;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.id = params && params.id ? params.id : "";
    });
  }

  ngOnInit(): void {
    this.apiService.getCountry(this.id).subscribe(res => {
      this.country = res[1][0];
    });
  }

  onBack() {
    this.router.navigate([`/region/${this.country.region.id}`]);
  }

}
