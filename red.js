function red() {
	document.getElementById('red').style.background = 'red';
	document.getElementById('yellow').style.background = 'black';
	document.getElementById('green').style.background = 'black';
	setTimeout(color1, 2000);
}
function color1() {
	document.getElementById('yellow').style.background = 'yellow';
	document.getElementById('red').style.background = 'black';
	setTimeout(color2, 2000);
}
function color2() {
	document.getElementById('yellow').style.background = 'black';
	document.getElementById('green').style.background = 'green';
	setTimeout(red, 2000);
}
window.onload = red();