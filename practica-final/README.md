# WORLD BANK API LOCATIONS

## Antes de arrancar el proyecto:

npm i

### CONTAINER PRESENTER
## Arquitectura

APLICACIÓN: practica-final
 
    CONTAINERS: apps/practica-final/src/app/pages:
          - continent.component
          - region.component
          - country.component

    Utilizan 'OnPush' como estrategia de detección de cambio

    PRESENTER: apps/practica-final/src/app/components
          -table-presenter.component

LIBRERIAS: libs
      shared/api ---> src/lib/api
          -api.service ( httpClient )


### TEST'S

ng e2e practica-final-e2e --watch, ----> test de archivos en practica-final-e2e/src/integration
ng test shared-api,   ---> Test del servicio
ng test practica-final ---> Tests unitarios de los componentes 


### PWA ###



ng build --prod

npm run localhost-prod   ---> Arranca angular-http-server localmente en modo prod en el puerto 8080


### SSR ###


Angular Universal

npm run build:ssr

npm run build:client-and-server-bundles

node dist/practica-final/server/main.js   ---> Arranca node server en el puerto 4000

Arrancado, se puede comprobar si la carga de la página se está haciendo desde el server o el browser comprobando la consola 
(al estar arrancado el server aparecerá 'server').


### WEB COMPONENTS ###

Recomendable ejecutar: 
  npm cache verify
  npm i webpack
  npm i --save web-animations-js


- Generar la aplicación 

    ng g @nrwl/angular:application wbde-country

- Agregar librería Elements de Angular

    ng add @angular/elements

- Generar el componente externo

    ng add ngx-build-plus --project wbde-country

- Compatibilidad con navegadores

    ng g ngx-build-plus:wc-polyfill --project wbde-country

- Build prod

    ng build --prod --single-bundle --project wbde-country ---> single bundle

