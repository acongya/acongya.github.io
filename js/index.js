// JavaScript Document

$(window).resize(resize);

function resize() {
	

let bottom=document.getElementById("bottom");
let top=document.getElementById("top");
let width=window.getComputedStyle(top)['width']
bottom.style.width=width;


};
window.onload=function(){
	resize()
}
