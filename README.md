# Gulp web app generator

The (ultimate) [Yeoman](http://yeoman.io) web app generator to scaffold out a front-end web app using the [Gulp](http://gulpjs.com) task-runner.

This is the ultimate Gulp boilerplate to kick-start your new builds. Check out the list of features below to see what makes Gulper v2 awesome!

## Features
* Angular
* Angular Routes
* Autoprefixer
* Browserify
* Browserify Shim
* BrowserSync
* CoffeeScript
* Compass
* Handlebars
* Image optimization
* jQuery
* LiveReload
* Minify CSS
* Notify
* SASS
* Watchify

## Tasks
*TLDR;* To add new Gulp tasks just simply create a new task file in `~/gulp/tasks`.

Rather than managing one giant gulpfile.js that's responsible for creating multiple tasks, each task has been broken out into their own tasks in `~/gulp/tasks`. Any file in that folder gets automatically required by the loop in `~gulp/index.js`.

## Getting Started

To install generator-gulper from npm, run:

```
$ npm install -g generator-gulper
```


Initiate the generator in your working directory:

```
$ yo gulper
```

Serve web app:
```
$ gulp
```

## Build
To build out your project ready for deployment, run `grunt build` from the root of your project. This will create an archive containing your site files in `~/_build`.


## Contribution
Contribution is welcomed as are feature requests.

## License
MIT