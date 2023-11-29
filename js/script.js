function upDate(PreviewPic){
    let imageDiv = document.querySelector('#image');
    imageDiv.innerHTML = PreviewPic.alt;
    imageDiv.style.backgroundImage =  "url('" + PreviewPic.src +"')";
    }
   
       function unDo(){
          let imageDiv = document.querySelector('#image');
       imageDiv.innerHTML = "Hover over an image below to display here.";
       imageDiv.style.backgroundImage = "url('')";
       }