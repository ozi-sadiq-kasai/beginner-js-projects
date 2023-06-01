let increase = document.getElementById('increase').addEventListener('click',addition)
let decrease = document.getElementById('decrease').addEventListener('click',subtract)
let reset = document.getElementById('reset').addEventListener('click',rewind)
let display = document.querySelector('p')


let counter = 0
function addition(){
 counter++
 display.textContent = counter
 paint()
}
function subtract(){
 counter--
 display.textContent = counter
 paint()
}
function rewind(){
 counter=0
 display.textContent = counter
 paint()
}
function paint(){
  if(counter > 0){
    display.style.color = 'green'
    }
    else if(counter <0){
    display.style.color = 'red'
    }
    else(display.style.color = 'yellow')
}
