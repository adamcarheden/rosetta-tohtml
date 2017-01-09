# rosetta-tohtml

> Translates script tags into HTML using a user-defined function

[Rosetta](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Rosetta) is a framework for using languages other than Javascript in web browsers by providing a hook into the *type* attribute of HTML script tags. You provide Rosetta with a function that translates the content of the script tag into Javascript. rosetta-tohtml lets you provide a function to translate the content of the script tag into html instead of Javascript, allowing you to write content for the web in something other than HTML. Markdown is the obvious choice, but for that see [rosetta-markdown](https://www.npmjs.com/package/rosetta-markdown).

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
// so pick your favorite javascript reuse method of the week
var rosettaToHTML = require('rosetta-tohtml');

// Pull in some code to translate for you
// We'll use marked (https://github.com/chjj/marked) to translate markdown
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
Dump the above in a script tag and then dump markdown in a script tag with a type='text/md' attribute.

## Contribute
``` bash
npm install
npm run build
```
This just webpackifies stuff at the moment.
Some karma and nightwatch tests would be a good addition.
