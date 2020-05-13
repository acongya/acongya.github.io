// JavaScript Document

$(window).resize(resize);

function resize() {
	mine();
	resizenav();
};
function mine(){
		
	let boxs=document.getElementsByClassName("box");
	for(box of boxs){
		let i=box.querySelector("p");
		let width=window.getComputedStyle(i)['width'];
		i.style.height=width;
		console.log()
		i.style.lineHeight=width;
		i.style.fontSize=`${(+(width.slice(0,-2)))*0.2}px`;
	}
}
function resizenav() {
	

let bottom=document.getElementById("bottom");
let top=document.getElementById("title");
let width=window.getComputedStyle(top)['width']
bottom.style.width=width;
};
window.onload=function(){
	resize();
}