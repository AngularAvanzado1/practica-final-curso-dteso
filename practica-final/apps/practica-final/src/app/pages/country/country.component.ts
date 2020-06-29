import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'libs/shared/api/src/lib/api/api.service';

@Component({
  selector: 'practica-final-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  title = 'SELECTED COUNTRY';
  id;
  country;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.route.params.subscribe(params => {
      this.id = params && params.id ? params.id : "";
    });
  }

  ngOnInit(): void {
    this.apiService.getCountry(this.id).subscribe(res => {
      this.country = res[1][0];
      this.cdr.detectChanges();
    });
  }

  onBack() {
    this.router.navigate([`/region/${this.country.region.id}`]);
  }

}
