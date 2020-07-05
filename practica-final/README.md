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

ng e2e practica-final-e2e --watch ----> para ejecutar test e2e de navegacion completa por todas las páginas en practica-final-e2e/src/integration

ng test shared-api   ---> para ejecutar TESTS DE SERVICIOS

ng test practica-final ---> para ejecutar TESTS UNITARIOS de las páginas 

### NgRx

Se dispone de un Store que centraliza la gestión del estado de la aplicación. 

Se puede visualizar el proceso a través de las Redux DevTools ( extensión Chrome ).

Una vez arrancado el proyecto, en el propia página de inicio se dispone de un enlace que realiza la carga de continentes a través del patrón ngrx

Esto se encuentra implementado en el componente app/geographics y su código en la subcarpeta store donde se implementan acciones, selector, reducer y efecto.


### PWA 

        ng build --prod ---> genera dist en dist/practica-final/browser

        "localhost-prod": "angular-http-server -p 8080 --path ./dist/practica-final/browser"   ---> Arranca angular-http-server localmente en modo prod en el puerto 8080

Se ha cofigurado el modo de instalación en lazy así como un mensaje para preguntar por la actualización y una comprobación de opciones 
disponibles. 

Se puede probar dicha actualizacióncuando existan cambios en la aplicación

En el ngsw-config.json modificar la versión de la aplicación

Levantar en modo producción ( imprescindible ) con los comandos indicados arriba para comprobvar funcionamiento.

Se sugiere marcar la opción 'Update on reload' dentro del inspector de Chrome/Aplicaciones/Service Workers para realizar la prueba


### SSR 


Angular Universal

        npm run build:ssr

        npm run build:client-and-server-bundles

        node dist/practica-final/server/main.js   ---> Arranca node server en el puerto 4000

Arrancado, se puede comprobar si la carga de la página se está haciendo desde el server o el browser comprobando la consola 
(al estar arrancado el server aparecerá 'server').


### WEB COMPONENTS 

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


### INTERNACIONALIZACIÓN

- Ejecutar 

"start:practica-final-es": "npm run build:practica-final-es && angular-http-server --path ./dist/apps/practica-final/es"

Abrir localhost:8080. Arrancará en localhost:8080/es/home

NOTAS:

        "i18n:practica-final": "ng xi18n practica-final --output-path src/locale"

        Generar carpeta locale que contiene el fichero messages.xlf y hacer su copia con sus respectivos target
        en el mesages.[idioma].xlf 

        Añadir configuracion en el angular.json

                "production-es": {
                  "fileReplacements": [
                    {
                      "replace": "apps/practica-final/src/environments/environment.ts",
                      "with": "apps/practica-final/src/environments/environment.prod.es.ts"
                    }
                  ],
                  "outputPath": "dist/apps/practica-final/es/",
                  "i18nFile": "apps/practica-final/src/locale/messages.es.xlf",
                  "i18nFormat": "xlf",
                  "i18nLocale": "es",
                  "baseHref": "es"
                }

        Compila el proyecto indicado con la configuración que se haya especificado en el angular.json

          "build:practica-final-es": "ng build practica-final --configuration=production-es"



