//dont style using inline/from JS, cause it wont be override using div/class in the css




function createGrid(n, color){
const divContainer = document.querySelector('.container');
    
    divContainer.innerHTML = ''; // reset the container
    for(let i=1; i<=n; i++) {
        div = document.createElement('div');
        // div.setAttribute('class', `div${i}`); doesnt really need this i think
        for(let j=1; j<=n; j++){
            divChild = document.createElement('div');
            // divChild.setAttribute('class',`div${i}-child${j}`);
            divChild.setAttribute('class', 'div-child');
            divChild.style.width = `${400/n}px`;
            divChild.style.height = `${400/n}px`;
            div.appendChild(divChild); //using closure (access parent variable)
        }
        divContainer.appendChild(div);
    };
    divChilds = document.querySelectorAll('.div-child');
    divChilds.forEach(div => {
        div.addEventListener('mouseover', (event)=> {
            if(event.target.style.backgroundColor == ''){
                event.target.style.backgroundColor = 'rgba(0,0,0,0.5)';
            } else if (event.target.style.backgroundColor == 'rgba(0,0,0,0.5)') {
                event.target.style.backgroundColor = 'rgba(0,0,0,1)'; //how to add opacity
            }
        })
    })
}



createGrid(32);

slider = document.querySelector('.slider');
sliderText = document.querySelector('.slider-text');
sliderText.textContent = '32x32'
slider.addEventListener('input', ()=> {
    console.log(slider.value);
    sliderText.textContent = `${slider.value}x${slider.value}`;
    createGrid(slider.value);
});



colorPickerBtn = document.querySelector('#color-picker');
colorPickerBtn.addEventListener('click', () => {
    divChilds = document.querySelectorAll('.div-child');
    divChilds.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = colorPickerBtn.value;
        })
    })
})

blackBtn = document.querySelector('.black-color.button');
blackBtn.addEventListener('click', ()=> {
    divChilds = document.querySelectorAll('.div-child');
    divChilds.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'rgba(0,0,0,0.5)';
            if (div.style.backgroundColor == 'rgba(0,0,0,0.5)') {
                div.style.backgroundColor = 'rgba(0,0,0,1)';
            }
        })
    })
})


randomBtn = document.querySelector('.random-color.button');
randomBtn.addEventListener('click', () => {
    divChilds = document.querySelectorAll('.div-child');
    divChilds.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = randomColorGenerator();
        })
    })
})

function randomColorGenerator() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


eraseBtn = document.querySelector('.erase.button');
eraseBtn.addEventListener('click', ()=> {
    divChilds = document.querySelectorAll('.div-child');
    divChilds.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'white';
        })
    })
})





//for clearing
clearButton = document.querySelector('.clear.button');

clearButton.addEventListener('click', ()=>{
    divChilds.forEach(div => {
        div.style.backgroundColor = 'white';
    })
})



//opacity done
//random color
//eraser
//colorpicker??
//slidergrid



blackBtn = document.querySelector('.black-color.button');



