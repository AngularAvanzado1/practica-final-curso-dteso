import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePresenterModule } from '../../components/table-presenter/table-presenter.module';

describe('RegionComponent', () => {
  let regionComponent: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TablePresenterModule],
      declarations: [RegionComponent]
    })
      .compileComponents();
  }));
  it('should create the component', () => {
    fixture = TestBed.createComponent(RegionComponent);
    regionComponent = fixture.componentInstance;
    expect(regionComponent).toBeTruthy();
  });
});
