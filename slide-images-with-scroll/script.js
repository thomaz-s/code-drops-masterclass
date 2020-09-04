const img = document.querySelectorAll('.item img');
img.forEach(async function(element) {
    const response = await fetch('https://source.unsplash.com/random');
    element.setAttribute('src', response.url);
    element.setAttribute('alt', 'image');
});

document.querySelector('#items').addEventListener('wheel', function(event){
    if (event.deltaY > 0){
        event.target.scrollBy(300, 0);
    }else if (event.deltaY < 0){
        event.target.scrollBy(-300, 0);
    }
});