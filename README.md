# Testproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Issue faced while project exicution 

Solution please see this steps

added 1313 packages from 1069 contributors and audited 47543 packages in 600.662s
found 2 high severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

C:\Angular_Project\TestPro>npm audit

                       === npm audit security report ===

# Run  npm update handlebars --depth 4  to resolve 1 vulnerability

  High            Prototype Pollution

  Package         handlebars

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-reports > handlebars

  More info       https://nodesecurity.io/advisories/755




                                 Manual Review
             Some vulnerabilities require your attention to resolve

          Visit https://go.npm.me/audit-guide for additional guidance


  High            Arbitrary File Overwrite

  Package         tar

  Patched in      >=4.4.2

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > node-gyp > tar

  More info       https://nodesecurity.io/advisories/803

found 2 high severity vulnerabilities in 47543 scanned packages
  run `npm audit fix` to fix 1 of them.
  1 vulnerability requires manual review. See the full report for details.

C:\Angular_Project\TestPro>npm update
Terminate batch job (Y/N)? y

C:\Angular_Project\TestPro>npm install
npm WARN ngx-loading@3.0.1 requires a peer of @angular/common@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-loading@3.0.1 requires a peer of @angular/core@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

audited 47543 packages in 38.068s
found 2 high severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

C:\Angular_Project\TestPro>npm audit fix
npm WARN ngx-loading@3.0.1 requires a peer of @angular/common@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-loading@3.0.1 requires a peer of @angular/core@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

updated 2 packages in 202.418s
fixed 1 of 2 vulnerabilities in 47543 scanned packages
  1 vulnerability required manual review and could not be updated

C:\Angular_Project\TestPro>npm i -f
npm WARN using --force I sure hope you know what you are doing.

> fsevents@1.2.7 install C:\Angular_Project\TestPro\node_modules\fsevents
> node install

npm WARN ngx-loading@3.0.1 requires a peer of @angular/common@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-loading@3.0.1 requires a peer of @angular/core@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.

added 67 packages from 26 contributors and audited 47543 packages in 27.511s
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

C:\Angular_Project\TestPro>
C:\Angular_Project\TestPro>npm audit fix
npm WARN ngx-loading@3.0.1 requires a peer of @angular/common@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-loading@3.0.1 requires a peer of @angular/core@^6.0.0-rc.0 || ^6.0.0 but none is installed. You must install peer dependencies yourself.

up to date in 17.093s
fixed 0 of 1 vulnerability in 47543 scanned packages
  1 vulnerability required manual review and could not be updated

C:\Angular_Project\TestPro>npm audit

                       === npm audit security report ===


                                 Manual Review
             Some vulnerabilities require your attention to resolve

          Visit https://go.npm.me/audit-guide for additional guidance


  High            Arbitrary File Overwrite

  Package         tar

  Patched in      >=4.4.2

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > node-gyp > tar

  More info       https://nodesecurity.io/advisories/803

found 1 high severity vulnerability in 47543 scanned packages
  1 vulnerability requires manual review. See the full report for details.

C:\Angular_Project\TestPro>npm install npm@latest -g
C:\Users\am55930\AppData\Roaming\npm\npx -> C:\Users\am55930\AppData\Roaming\npm\node_modules\npm\bin\npx-cli.js
C:\Users\am55930\AppData\Roaming\npm\npm -> C:\Users\am55930\AppData\Roaming\npm\node_modules\npm\bin\npm-cli.js
+ npm@6.9.0
added 426 packages from 800 contributors in 387.485s
