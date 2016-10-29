# rosetta-tohtml

> Translates script tags into HTML using a user-defined function

## Demo

[Live Demo](https://plnkr.co/edit/2y8cLQ?p=preview)

## Install
``` bash
npm install rosetta-tohtml --save
```
or

``` bash
git clone https://github.com/adamcarheden/rosetta-tohtml.git
```
## Use
``` js
// Get a handle on things.
// It's umd (https://github.com/umdjs/umd), 
//so pick your javascript reuse method of the week
var rosettaToHTML = require('rosetta-tohtml');

// Pull in some code to translate for you
// We'll use marked https://github.com/chjj/marked) to translate markdown
//
// Note - If you want markdown, try this instead of just copying this example:
// https://github.com/adamcarheden/rosetta-markdown
//
var marked = require('marked');

// Map script tag type attributes to your translation function
rosettaToHTML.appendCompiler([ "text/markdown", "text/md" ], function(md) { 
	return marked(md);
});

// Once the page is loaded...
document.addEventListener("DOMContentLoaded", function() {
	// ...kick off replacements
	rosettaToHTML.translateAll();
});	
```

## Contribute
``` bash
npm install
npm run build
```
This just webpackifies stuff at the moment.
Some karma and nightwatch tests would be a good addition.
