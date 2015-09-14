colorInspiration
================

Random Colors with keyboard toggle!

-----------------------------------

### To Use
Color switching on the background (or any element) with keyboard arrows. Give the function two dom elements to apply this to (the background you want to change, and the text you want to change), and you're good to go. If you haven't used browserify before, check out the [browserify site](http://browserify.org/). Alternatively, if you just want to use the module without browserify, you can just copy/paste the `color-inspiration.js` file wherever you want to use it, and change

	module.exports = colorInspiration;
	
to something like

	colorInspiration.init(document.getElementById('body'), document.getElementById('text'));
	
or whatever you want to call them.

### To Modify
Clone the repo, run `npm install` from the terminal within the directory. Change what you want in `full-screen.js`, run `grunt` from the terminal to build.