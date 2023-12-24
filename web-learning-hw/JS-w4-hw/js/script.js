/*Name this external file gallery.js*/
function upDate(previewPic){
   document.querySelector('#image').innerHTML=previewPic.alt;
   document.querySelector('#image').style.backgroundImage= "url('" +previewPic.src+"')";
 }
    
 function unDo(){
  document.querySelector('#image').style.backgroundImage="url('')";
  document.querySelector('#image').innerHTML="Hover over an image over to display here.";
 }

function tabIndexer(){
	let images = document.querySelectorAll(".preview");
	for (let i = 0; i < images.length; i++) {
		console.log("Image "+i)
		images[i].setAttribute("tabindex","0")}
  }
