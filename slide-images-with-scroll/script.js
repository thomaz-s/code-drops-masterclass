const img = document.querySelectorAll('.item img');
img.forEach(function(element) {
    var number = Math.round(Math.random()*999);
    if (number < 100) number += 100;
    element.setAttribute('src', 'https://unsplash.it/1600/400?image='+number);
    element.setAttribute('alt', number);
});

document.querySelector('#items').addEventListener('wheel', function(event){
    if (event.deltaY > 0){
        event.target.scrollBy(300, 0);
    }else if (event.deltaY < 0){
        event.target.scrollBy(-300, 0);
    }
});