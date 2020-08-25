const $ = document.querySelector.bind(document);

function TabNavigation(){

    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab: $('[data-open]')
    }

    function hideTabsContent(){
        html.contents.forEach(element => {
            element.style.display = 'none';
        });
    }

    function removeAllActiveClasses(){
        html.links.forEach(element => {
            element.className = element.className.replace(' active', '');
        });
    }

    function showCurrentTab(id){
        const tabContent = $('#' + id);
        tabContent.style.display = 'block';
    }

    function selectTab(event){
        hideTabsContent();
        removeAllActiveClasses();
        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);
        target.className += ' active';
    }

    function listenChanges(){
        html.links.forEach(element => {
            element.addEventListener('click', selectTab);
        });
    }

    function init(){
        hideTabsContent();
        listenChanges();
        html.openTab.click();
    }

    return {
        init
    }

}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
    tabNavigation.init();
});