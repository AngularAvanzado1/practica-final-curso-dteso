import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


describe('GIVEN: a ApiService', () => {
  describe('WHEN: the DataModule is compiled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
    });

    /*service*/
    it('THEN: service should be created', () => {
      const service: ApiService = TestBed.get(ApiService);
      expect(service).toBeTruthy();
    });


    /*continents*/
    it(`THEN in CONTINENTS: should return an observable when call 'getContinents$()'`, () => {
      const service: ApiService = TestBed.get(ApiService);
      const continents$: Observable<any> = service.getContinents$();
      expect(continents$).toBeInstanceOf(Observable);
    });
    it(`THEN in CONTINENTS: continents list should not be empty when call 'getContinents$()'`, () => {
      const service: ApiService = TestBed.get(ApiService);
      const continents$: Observable<any> = service.getContinents$();
      let data = [];
      continents$.subscribe(res => {
        data = res;
      })
      expect(data.length > 0).toBeTruthy;
    });

    it(`THEN in CONTINENTS: should return 'It works' when call 'getContinents()'`,
      async(() => {
        const service: ApiService = TestBed.get(ApiService);
        service
          .getContinents$()
          .subscribe(result =>
            expect(result).toEqual({ message: 'It works' })
          );
        const httpMock = TestBed.get(HttpTestingController); // mock del backend para no depender del servidor
        const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json'); // esperar a que se llame a esta ruta
        req.flush({ message: 'It works' }); // responder con esto
        httpMock.verify(); // comprobar que no hay más llmadas
      }));


    /*regions*/
    it(`THEN in REGIONS: should return an observable when call 'getRegions$(code)'`, () => {
      const code = 'ECS'
      const service: ApiService = TestBed.get(ApiService);
      const regions$: Observable<any> = service.getRegions$(code);
      expect(regions$).toBeInstanceOf(Observable);
    });
    it(`THEN in REGIONS: continents list should not be empty when call 'getRegions$()'`, () => {
      const code = 'ECS'
      const service: ApiService = TestBed.get(ApiService);
      const regions$: Observable<any> = service.getRegions$(code);
      let data = [];
      regions$.subscribe(res => {
        data = res;
      })
      expect(data.length > 0).toBeTruthy;
    });

    it(`THEN in REGIONS: should return 'It works' when call 'getRegions()'`,
      async(() => {
        const code = 'ECS'
        const service: ApiService = TestBed.get(ApiService);
        service
          .getRegions$(code)
          .subscribe(result =>
            expect(result).toEqual({ message: 'It works' })
          );
        const httpMock = TestBed.get(HttpTestingController); // mock del backend (simulación)
        const req = httpMock.expectOne(`http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`); // la api debe estar operativa aunque simulemos su respuesta
        req.flush({ message: 'It works' }); // respuesta simulada siempre que se haya obtenido conexión
        httpMock.verify();
      }));

    /*country*/
    it(`THEN in COUNTRY: should return an observable when call 'getCountry(id)'`, () => {
      const id = 'BHR'
      const service: ApiService = TestBed.get(ApiService);
      const country$: Observable<any> = service.getCountry(id);
      expect(country$).toBeInstanceOf(Observable);
    });
    it(`THEN in COUNTRY: response only has an unique value 'getCountry(id)'`, () => {
      const id = 'BHR'
      const service: ApiService = TestBed.get(ApiService);
      const country$: Observable<any> = service.getCountry(id);
      let data = [];
      country$.subscribe(res => {
        data = res;
      })
      expect(data.length === 1).toBeTruthy;
    });

    it(`THEN in country: should return 'It works' when call 'getCountry(id)'`,
      async(() => {
        const id = 'BHR'
        const service: ApiService = TestBed.get(ApiService);
        service
          .getCountry(id)
          .subscribe(result =>
            expect(result).toEqual({ message: 'It works' })
          );
        const httpMock = TestBed.get(HttpTestingController); // mock del backend (simulación)
        const req = httpMock.expectOne(`http://api.worldbank.org/V2/country/${id}?format=json`); // la api debe estar operativa aunque simulemos su respuesta
        req.flush({ message: 'It works' }); // respuesta simulada siempre que se haya obtenido conexión
        httpMock.verify();
      }));
  });
});
