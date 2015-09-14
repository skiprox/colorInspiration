// var colorArray = ["#444444"];
// var arrLocation = 0;

// $(document).bind('keyup', function (e) {
// 	if (e.keyCode == '37') {
// 		goBackward();
// 	}
// 	if (e.keyCode == '39') {
// 		goForward();
// 	}
// 	else {
// 		return false;
// 	}
// });

// function changeColor() {
// 	var currcolor = $('#colorcode h1').text();
// 	colorArray.push(currcolor);
// 	var newcolor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
// 	$('body').css('background', newcolor);
// 	$('#colorcode h1').text(newcolor.toUpperCase());
// }

// function reverseChange() {
// 	var prevcolor = colorArray.pop();
// 	$('body').css('background', prevcolor);
// 	$('#colorcode h1').text(prevcolor);
// }

// function goForward() {
// 	if (colorArray.length - 1 > arrLocation) {
// 		var colorchange = colorArray[arrLocation + 1];
// 		$('body').css('background', colorchange);
// 		$('#colorcode h1').text(colorchange.toUpperCase());
// 		arrLocation++;
// 	}
// 	else {
// 		var colorchange = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
// 		$('body').css('background', colorchange);
// 		$('#colorcode h1').text(colorchange.toUpperCase());
// 		colorArray.push($('#colorcode h1').text());
// 		if (colorArray.length >= 100) {
// 			colorArray.shift();
// 		}
// 		else {
// 			arrLocation++;
// 		}
// 	}
// }

// function goBackward() {
// 	if (arrLocation > 0) {
// 		var colorchange = colorArray[arrLocation-1];
// 		$('body').css('background', colorchange);
// 		$('#colorcode h1').text(colorchange.toUpperCase());
// 		arrLocation--;
// 	}
// }

'use strict';

var colorInspiration = (function() {

	// Stored Variables
	var colorArray = ['#444444'];
	var arrayLocation = 0;
	var body = null;
	var text = null;

	// Set the elements, so we don't have to touch the dom constantly to get them
	var setElements = function(bodyElement, textElement) {
		body = bodyElement;
		text = textElement;
	};

	// The initialization function, to add the listeners on the keyboard
	var addListeners = function() {
		document.addEventListener('keyup', onkeyup);
	};

	// When we're done pressing a key
	var onkeyup = function(e) {
		// Pressed left
		if (e.keyCode == '37') {
			goBackward();
		}
		// Pressed right
		else if (e.keyCode == '39') {
			goForward();
		}
		else {
			return false;
		}
	};

	var goForward = function() {
		if (colorArray.length - 1 > arrayLocation) {
			var colorChange = colorArray[arrayLocation + 1];
			body.style.backgroundColor = colorChange;
			text.innerHTML = colorChange;
			arrayLocation++;
		}
		else {
			var colorChange = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
			colorChange = colorChange.toUpperCase();
			body.style.backgroundColor = colorChange;
			text.innerHTML = colorChange;
			colorArray.push(colorChange);
			if (colorArray.length >= 100) {
				colorArray.shift();
			}
			else {
				arrayLocation++;
			}
		}
	};

	var goBackward = function() {
		if (arrayLocation > 0) {
			var colorChange = colorArray[arrayLocation-1];
			colorChange = colorChange.toUpperCase();
			body.style.backgroundColor = colorChange;
			text.innerHTML = colorChange;
			arrayLocation--;
		}
	};

	return {
		init : function(bodyElement, textElement) {
			setElements(bodyElement, textElement);
			addListeners();
		}
	}

}());

module.exports = colorInspiration