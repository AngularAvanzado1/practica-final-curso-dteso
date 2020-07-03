import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { GeographicsComponent } from './geographics.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePresenterModule } from '../components/table-presenter/table-presenter.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Store } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

describe('GeographicsComponent', () => {
  let component: GeographicsComponent;
  let fixture: ComponentFixture<GeographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        TablePresenterModule,
        StoreRouterConnectingModule.forRoot()
      ],
      declarations: [GeographicsComponent]
    })
      .compileComponents();
  }));
  it('should create the component', () => {
    fixture = TestBed.createComponent(GeographicsComponent);
    const geographicsComponent = fixture.componentInstance;
    expect(geographicsComponent).toBeTruthy();
  });
});
