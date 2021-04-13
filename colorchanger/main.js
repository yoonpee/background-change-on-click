const colors = ['peachpuff', 'peru', 'steelblue', 'purple', 'hotpink', 'lightgreen'];

const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    let cont = document.getElementById('container');
    cont.style.backgroundColor = randomColor;
})
//1.variable array.
//2.btn event.
//3.when clikcing randomizer.
//4.when clikcing container select.
//5.selected container is == randomizer.
