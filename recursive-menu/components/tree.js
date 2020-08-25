export default function(data){

    const tree = document.querySelector('nav#tree');
    const menu = document.createElement('ul');
    tree.appendChild(menu);
    
    const root = data.filter(data => !data.parent);
    createSubItem(root, menu);

    function createSubItem (items, ul){
        items.forEach((item) => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(item.name));

            const children = data.filter(function (subItem) {return subItem.parent === item.id;});
            if (children.length > 0){
            
                li.addEventListener('click', event => {
                    event.stopPropagation()
                    event.target.classList.toggle('open')
                });
                li.classList.add('has-children');
            
                const childUl = document.createElement('ul');
                li.appendChild(childUl);
                createSubItem(children, childUl);
            }

        ul.appendChild(li);

        });
    }
}