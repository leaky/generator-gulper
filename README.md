# Web app generator with GulpJS

> [Yeoman](http://yeoman.io) generator to scaffold out a front-end web app using the [GulpJS](http://gulpjs.com) task-runner. 

Currently in WIP-mode and not 100% stable.

## Features
* Code-over-config task file *(much easier to read than grunt!)*
* LiveReload
* Compile SASS
* CSS Autoprefixing
* Lint, Minify & Concat JS
* Image optimisation
* Scripts & styles minification
* **IT'S FAST (...er than grunt!)**


## Getting Started

To install generator-gulper from npm, run:

```
$ npm install -g generator-gulper
```


Initiate the generator in your working directory:

```
$ yo gulper
```

Install Node Dependencies:
```
$ npm install gulp gulp-util http gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-imagemin gulp-rename gulp-uglify gulp-clean gulp-concat gulp-cache gulp-open gulp-livereload gulp-embedlr ecstatic tiny-lr --save-dev
```

Serve web app:
```
$ gulp
```

## Known Issues
**07.02.2014** : There's currently an issue whereby the project will not generate the `dist` folder and open the site in the browser upon the first exectuion of the `gulp` command.

## Future
* Dynamic HTML generation (yeoman)

## License

MIT
