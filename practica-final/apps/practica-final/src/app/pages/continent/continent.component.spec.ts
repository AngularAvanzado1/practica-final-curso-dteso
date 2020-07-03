import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentComponent } from './continent.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePresenterModule } from '../../components/table-presenter/table-presenter.module';

describe('ContinentComponent', () => {
  let component: ContinentComponent;
  let fixture: ComponentFixture<ContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TablePresenterModule],
      declarations: [ContinentComponent]
    })
      .compileComponents();
  }));
  it('should create the component', () => {
    fixture = TestBed.createComponent(ContinentComponent);
    const continentComponent = fixture.componentInstance;
    expect(continentComponent).toBeTruthy();
  });
});
