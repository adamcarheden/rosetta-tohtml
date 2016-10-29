"use strict";
var rosetta = require('rosetta.js');

function replaceElement(oldE, newE) {
	for (var i=0; i<oldE.attributes.length; i++)
		newE.setAttribute(oldE.attributes[i].name, oldE.attributes[i].value);
	// This doesn't work because rosetta processes the output of 
	// getElementsByTagName('script'), which is a NodeList, which is a
	// live collection. So when we replace a <script> with a different tag,
	// we break index in the NodeList rosetta is using.
	//
	//oldE.parentNode.replaceChild(newE,oldE);
	//
	// This works fine instead...
	oldE.parentNode.insertBefore(newE, oldE);
	// Unless the user were to generate a <script> tag.
	// Bad user! No cookie.
	// (Really it should be a rosetta bug, but generating 
	//  more script tags is likely going to break things in other ways too.)
}

var RFUNNAME = 'ROSETTA-HTML-REPLACEMENT-FUNCTIONS';
function createECMASrc (src, compiler) {
	var newE = document.createElement('div');
	newE.innerHTML = compiler(src)

	if (typeof(window) === undefined) throw new Error('It doesn\'t make sense to use rosetta or rosetta-html outside of a browser');
	
	if (!(RFUNNAME in window)) window[RFUNNAME] = [];
	window[RFUNNAME].push(function(scrElem) { replaceElement(scrElem, newE); });
	return 'window["'+RFUNNAME+'"]['+(window[RFUNNAME].length - 1)+'](document.currentScript);';
}

var appendCompiler = function(mimeTypes, compiler) {
	rosetta.appendCompiler(mimeTypes, function(src) {
		return createECMASrc(src, compiler);
	});
}

module.exports = {
	rosetta: rosetta,
	appendCompiler: appendCompiler,
	translateAll: function() { rosetta.translateAll(); },
};
