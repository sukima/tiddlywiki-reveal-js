/*\
title: $:/plugins/sukima/reveal-js/libs/utils.js
type: application/javascript
module-type: library

Common utils for this plugin

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.isNumber = function(value) {
	return Number(value) === value;
};

exports.isBooleanTrue = function(value) {
	return value === 'true';
};

exports.convertDataValue = function(value) {
	if (exports.isBooleanTrue(value)) { return true; }
	if (exports.isNumber(value)) { return Number(value); }
	return value;
};

exports.assignDataset = function(dataset, attributes) {
	$tw.utils.each(attributes, function(value, attr) {
		if (!attr.startsWith('$') && !attr.startsWith('data-')) {
			dataset[attr] = exports.convertDataValue(value);
		}
	});
	return dataset;
};

})();
