const items = document.getElementsByClassName('item');
console.log(items);

let itemAttivo= 0;

const next = document.querySelector("#next")

next.addEventListener('click', function(){

    if (itemAttivo < items.length -1){

        items[itemAttivo].classList.remove("active");

        itemAttivo ++;

        items[itemAttivo].classList.add("active");

        if( itemAttivo === items.length -1 ){
            next.classList.add(".end")
        }
    }
});



