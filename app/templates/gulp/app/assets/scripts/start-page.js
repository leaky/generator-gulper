'use strict';

require('angular/angular');

var $ = require('jquery');
var controllers = require('./controllers/controller');

var startPage = {

	angular: function () {

		var app = angular.module('app', []);

		app.controller('StartController', ['$scope', controllers.StartController]);

	},

	jquery: function () {
		$('.dependencies').append('<li><a href="http://jquery.com" target="_blank">jQuery (npm)</a></li>');
	}

};

startPage.jquery();
startPage.angular();
