function getValues(){
    const luminosity = document.getElementById('luminosity').value;
    let color = document.getElementById('base-color').value;
    color = color.replace(/[^0-9a-f]/gi, '');

    if (color.length===6){
        calculate(color, luminosity);
    }else if (color.length===3){
        color = color[0]+color[0]+
                color[1]+color[1]+
                color[2]+color[2];
        calculate(color, luminosity);
    }else{
        alert('Cor hexadecimal inválida!');
    }
}

function calculate(color, luminosity){
    let newColor = '#';

    for (let i=0; i<3; i++){
        let hexComponent = color[i*2]+color[i*2+1];
        let intComponent = parseInt(hexComponent, 16);

        intComponent = intComponent+255*luminosity;
        if(intComponent<0){
            intComponent = 0;
        }else if (intComponent >255){
            intComponent = 255;
        }else{
            intComponent = Math.round(intComponent);
        }

        hexComponent = intComponent.toString(16);
        if (hexComponent.length === 2){
            newColor += hexComponent;
        }else{
            newColor += `0${hexComponent}`
        }

        applyChanges(newColor);        
    }
}

function applyChanges(newColor){
    const colorPreview = document.getElementById('color-preview');
    colorPreview.style.backgroundColor = newColor;

    const result = document.getElementById('result');
    result.value = newColor;
}