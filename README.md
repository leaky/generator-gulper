# Web app generator with GulpJS

[Yeoman](http://yeoman.io) generator to scaffold out a front-end web app using the [GulpJS](http://gulpjs.com) task-runner.
*(Currently a WIP and Contribution is welcomed)*

## Features
* Code-over-config task file *(much easier to read than grunt!)*
* LiveReload
* Compiles SASS
* CSS Autoprefixing
* Lint, Minify & Concat JS
* Image optimisation
* Scripts & styles minification
* **IT'S FAST**


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
$ npm install gulp gulp-util http run-sequence gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-imagemin gulp-rename gulp-uglify gulp-clean gulp-concat gulp-cache gulp-open gulp-livereload gulp-embedlr ecstatic tiny-lr --save-dev
```

Serve web app:
```
$ gulp
```

## Future
* Dynamic HTML generation (yeoman)

## License

MIT
