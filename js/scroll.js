// JavaScript Document

$(window).scroll(scroll)

function scroll() {
	let windowheight = $(window).height();
	let documentHeight = $(document).height();
	let offset = documentHeight - windowheight
	let now = $(document).scrollTop();
	if ((Math.abs(offset - now)) <= 1)
		generate()
}
function generate(){
	let main=document.getElementById("main")
	let module =document.getElementsByClassName("well");
	let mode=domToString(module[0])
	console.log(mode)
	for(i=0;i<5;i++){
		
		main.innerHTML+=mode;
	}
}
function domToString (node) {  
     let tmpNode = document.createElement('div')
     tmpNode.appendChild(node) 
     let str = tmpNode.innerHTML
     tmpNode = node = null;
     return str;  
}  