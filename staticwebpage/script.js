const colors = document.querySelectorAll('.color')
const body = document.querySelector("body")
const button = document.querySelector('.back')

colors.forEach( (item)=>{
    item.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'color1')
            body.style.backgroundColor = 'yellow'
        if(e.target.id === 'color2')
            body.style.backgroundColor = 'red'
        if(e.target.id === 'color3')
            body.style.backgroundColor = 'green'
        if(e.target.id === 'color4')
            body.style.backgroundColor = 'orange'
    })
})

button.addEventListener('click', ()=>{
    body.style.backgroundColor = 'black'
})