let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const imageContainer = document.querySelector(".image");
const button = document.querySelector("button");

getExternalImage();

button.onclick = updateImage;
imageContainer.onclick = updateAll;

async function getExternalImage(){
    const response = await fetch("https://source.unsplash.com/random");
    imageContainer.innerHTML = `<img src="${response.url}">`;
}

function updateClasses(){
    const {index} = getState();
    
    if (index != -1){
        imageContainer.classList.remove("fav");
    }else{
        imageContainer.classList.add("fav");
    }
}

function updateFavorites(){
    const {imageSrc, index} = getState();
    
    if (index != -1){
        favorites.splice(index, 1);
    }else{
        favorites.push(imageSrc);
    }
    
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function getState(){
    const imageSrc = document.querySelector(".image img").src;
    const index = favorites.indexOf(imageSrc);
    
    return {imageSrc, index};
}

function updateImage(){
    getExternalImage();
    updateClasses();
}

function updateAll(){
    updateClasses();
    updateFavorites();
}