/*
* TODO: 
* fork rosetta and add an `npm init` it so we can depend on it
* Generalize to work for anything that can dump html
* put markdown specific stuff in another project
* webpack
* karma
* nightwatch
* plunker
*/
(function () {

  if (!window.rosetta) { return; }

	function replaceElement(oldE, newE) {
		for (var i=0; i<oldE.attributes.length; i++)
			newE.setAttribute(oldE.attributes[i].name, oldE.attributes[i].value);
		oldE.parentNode.replaceChild(newE,oldE);
	}

  function createECMASrc (md, scrTag) {
		var newE = document.createElement('div');
		newE.innerHTML = marked(md);
		window.rosetta.md = function(scrElem) { replaceElement(scrElem, newE); }
		return 'window.rosetta.md(document.currentScript)';
  }

  rosetta.appendCompiler([ "text/markdown", "text/md" ], createECMASrc);

})();
rosetta.translateAll();
