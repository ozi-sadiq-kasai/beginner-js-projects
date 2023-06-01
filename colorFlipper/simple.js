let body = document.querySelector('body')
let text = document.querySelector('p')
let colors = ['grey','yellow','green','blue','purple']
let i = 0
function showColor(){
if( i < colors.length ){
  
  body.style.backgroundColor = colors[i]
  console.log(colors[i])
  i++
} 
else{i = 0}
  
  
    
  
}

document.querySelector('button').addEventListener('click',showColor)