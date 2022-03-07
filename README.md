# live - https://sparse-onurutku.netlify.app/map

## Projede Özellikleri

1-Moduler yapı kullandım. Lazy load ve preloadingStrategy: PreloadAllModules olarak ayarladım.

2-Search Pipe yazdım ve shared olarak tüm module'ler ortak olarak kullanabiliyor. Cards ve Users modülleri için isim yaş email vs gibi parametreler için arama yapabilirsiniz. Map module'ü için search kısmında yaş ile arama yapabilirsiniz.Örneğin maps sayfasındayken arama çubuğuna 20 yazdığınızda 20 yaşındaki kullanıcıları map üzerinde gösterecektir.

3-Pagination yazdım her modüle için ayrı şekilde sayfalama yapıyor. Card modülü için tek seferde 6 kişi getiriyor Users için 10 kişi getiriyor. Search pipe kullanıldığı esnada pagination iptal ediliyor ve aranan kullanıcılar getiriliyor.

4-GÖndermiş olduğunzu .JSON dosyasındaki lat,long koordinat değerleri doğru yerleri göstermiyor. Doğruları ile değiştirdim. Dosyayı src/assets/usersData.json altında bulabilirsiniz.

5-Data sanki http request ile alınıyormuş gibi bir service oluşturdum ve datayı oradan componentlere çektim.Dependency injection özelliğini de kullanmış oldum.

6-Style için Scss,Bootstrap ve fontawesome kullandım.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
