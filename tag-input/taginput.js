let tags = [];
let tagContainer = document.querySelector(".tag-container");
let input = tagContainer.querySelector("input");

input.addEventListener("keyup", addTags);

function addTags(event){
    if (event.key == "Enter"){
        input.value.split(",").forEach(function(tag){
            if (tag.trim()){
                tags.push(tag.trim());
            }
        });
        
        updateTags();
        input.value = "";
    }
}

function updateTags(){
    clearTags();
    tags.slice().reverse().forEach(function(tag){
        tagContainer.prepend(createTag(tag));
    });
}

function createTag(tag){
    const div = document.createElement("div");
    div.classList.add("tag");

    const span = document.createElement("span");
    span.innerHTML = tag;

    div.append(span);

    const i = document.createElement("i");
    i.classList.add("close");
    i.setAttribute("data-item", tag);
    i.onclick = removeTag;

    span.append(i);

    return div;
}

function removeTag(event){
    const i = event.currentTarget;
    const item = i.dataset.item;
    const index = tags.indexOf(item);
    tags.splice(index, 1);

    updateTags();
}

function clearTags(){
    tagContainer.querySelectorAll(".tag").forEach(function(tagElement){
        tagElement.remove();
    });
}