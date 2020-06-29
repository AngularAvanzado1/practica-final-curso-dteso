import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../../libs/shared/api/src/lib/api/api.service";

@Component({
  selector: 'practica-final-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CONTINENTS';
  continents;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getContinents$().subscribe(res => {
      this.continents = res;
    });
  }
}
