const images=[
    'images/2.jpg',
    'images/6.jpg',
    'images/1.jpg',
    'images/3.jpg',
    'images/4.jpg',
]
let imgIndex = 0;
let imgElement = document.getElementById('slider-img');
setInterval(()=>{
 const imageUrl = images[imgIndex]
 imgElement.setAttribute('src',imageUrl)
 imgIndex++;
 if(imgIndex>=images.length){
     imgIndex =0;
 }
},900)