const immagini = [ "../img/01.webp", "../img/02.webp", "../img/03.webp", "../img/04.webp", "../img/05.webp"];

const containerItem = document.querySelector("container-items");
let currentIndex = 0;

immagini.forEach(function(src, index){
    const element =document.createElement("div");
    element.classList.add("item");

    if(index===0){
        element.classList.add("active");
    }
    const img= document.createElement("img");
    img.src=src;

    element.appendChild(img);
    containerItem.appendChild(element);
});

items.forEach((item, i) => {
    // Solo il primo elemento avrà la classe "active"
    item.classList.toggle('active', i === index);
  });





 
    
