<<<<<<< HEAD
function fillPs(section, lenght){
    const p = document.querySelector(`${section} p`);
    for(var i=0; i<lenght; i++){
        p.textContent += `${section} `;
    }
}

fillPs('header', 300);
fillPs('main', 6000);
fillPs('footer', 300);

const bar = document.createElement('div');
document.body.append(bar);

bar.style.height = '4px';
bar.style.width = '0px';
bar.style.backgroundColor = '#0f0';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '10';
bar.style.transition = '0.2s';

const p = document.querySelector('main p');

window.addEventListener('load', ()=>{
    document.addEventListener('scroll', ()=>{
        const textHeight = p.offsetHeight;
        const pagePosition = window.pageYOffset;
        const percentage = pagePosition * 100 / textHeight;
        bar.style.width = Math.round(percentage) + '%';
    });
=======
function fillPs(section, lenght){
    const p = document.querySelector(`${section} p`);
    for(var i=0; i<lenght; i++){
        p.textContent += `${section} `;
    }
}

fillPs('header', 300);
fillPs('main', 6000);
fillPs('footer', 300);

const bar = document.createElement('div');
document.body.append(bar);

bar.style.height = '4px';
bar.style.width = '0px';
bar.style.backgroundColor = '#0f0';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '10';
bar.style.transition = '0.2s';

const p = document.querySelector('main p');

window.addEventListener('load', ()=>{
    document.addEventListener('scroll', ()=>{
        const textHeight = p.offsetHeight;
        const pagePosition = window.pageYOffset;
        const percentage = pagePosition * 100 / textHeight;
        bar.style.width = Math.round(percentage) + '%';
    });
>>>>>>> 7653609873538b48e64da101a9de90d686ca8ba4
});