
  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }








// let mymoto = ["DragStar 400", "DragStar 1100"];

// function loadMoto(){
// 	document.getElementById("moto").innerHTML = mymoto;
// 	}

// function myFunction(){
// 	let moto = prompt("What motorcycles did I have?");
// 	mymoto[mymoto.length] = moto;
// 	document.getElementById("moto").innerHTML = mymoto;
// 	}

// function pickImage(){
// 	options = ["drag_star_400.jpg", "drag_star_1100.jpg", "road_star.jpg", "super_tenere.jpg"]
// 	randomImg = "imgs/" + options[Math.floor(Math.random()*options.length)];
// 	img = document.querySelector("#button_img")
// 	img.setAttribute("src", randomImg)
// 	img.setAttribute("alt", "")
// 	}

// function setImages(){
// 	options = ["drag_star_400.jpg", "drag_star_1100.jpg", "road_star.jpg", "super_tenere.jpg"]

// 	currentImages = document.querySelectorAll(".flex img")
// 	for (var i = 0; i < currentImages.length; i++) {
// 		console.log("Image "+i)

// 		randomImg = "imgs/" + options[Math.floor(Math.random() * options.length)];

// 		currentImages[i].src = randomImg
// 		currentImages[i].setAttribute("tabindex","0")
// 	}
// }