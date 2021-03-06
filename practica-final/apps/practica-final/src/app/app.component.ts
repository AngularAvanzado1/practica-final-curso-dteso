import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../../libs/shared/api/src/lib/api/api.service";
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'practica-final-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CONTINENTS';
  continents;

  constructor(
    private apiService: ApiService,
    private swUpdate: SwUpdate
  ) {
    this.checkVersionUpdates();
  }

  ngOnInit() {
    this.apiService.getContinents$().subscribe(res => {
      this.continents = res;
    });
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(data => {
        console.log('Checking for Updates...');
      });
      this.swUpdate.available.subscribe(event => {
        if (event.available.appData) {
          const appData: any = event.available.appData;
          let msg = `New version ${appData.version} available. Features added:`;
          msg += `${appData.changelog}.`;
          msg += ` Reload?`;
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
