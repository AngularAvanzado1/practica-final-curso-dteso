import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../../libs/shared/api/src/lib/api/api.service";
import { SwUpdate, SwPush } from '@angular/service-worker';

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
    private swUpdate: SwUpdate,
    private swPush: SwPush
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
          let msg = `New version ${appData.version} available.`;
          msg += `${appData.changelog}.`;
          msg += 'Reaload?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
