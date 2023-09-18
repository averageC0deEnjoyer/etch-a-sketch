parentBody = document.body;
divContainer = document.createElement('div');
divContainer.setAttribute('class','div-container')
parentBody.appendChild(divContainer);
for(i=1; i<=8; i++) {
    div = document.createElement('div');
    div.setAttribute('class', `div${i}`);
    for(j=1; j<=8; j++){
        divChild = document.createElement('div');
        divChild.setAttribute('class',`div${i}-child${j}`);
        divChild.style.width = '20px';
        divChild.style.height = '20px';
        divChild.style.backgroundColor = 'white';
        divChild.style.border = '1px black solid'
        div.appendChild(divChild); //using closure (access parent variable)
    }
    divContainer.appendChild(div);
}
