var colorArray = ["#444444"];
var arrLocation = 0;

$(document).bind('keyup', function (e) {
	if (e.keyCode == '37') {
		goBackward();
	}
	if (e.keyCode == '39') {
		goForward();
	}
	else {
		return false;
	}
});

function changeColor() {
	var currcolor = $('#colorcode h1').text();
	colorArray.push(currcolor);
	var newcolor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
	$('body').css('background', newcolor);
	$('#colorcode h1').text(newcolor.toUpperCase());
}

function reverseChange() {
	var prevcolor = colorArray.pop();
	$('body').css('background', prevcolor);
	$('#colorcode h1').text(prevcolor);
}

function goForward() {
	if (colorArray.length - 1 > arrLocation) {
		var colorchange = colorArray[arrLocation + 1];
		$('body').css('background', colorchange);
		$('#colorcode h1').text(colorchange.toUpperCase());
		arrLocation++;
	}
	else {
		var colorchange = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		$('body').css('background', colorchange);
		$('#colorcode h1').text(colorchange.toUpperCase());
		colorArray.push($('#colorcode h1').text());
		arrLocation++;
	}
}

function goBackward() {
	if (arrLocation > 0) {
		var colorchange = colorArray[arrLocation-1];
		$('body').css('background', colorchange);
		$('#colorcode h1').text(colorchange.toUpperCase());
		arrLocation--;
	}
}