let body = document.querySelector('body')
let text = document.querySelector('p')
let colors = ['red','yellow','green','blue','purple']


let runColor =  ()=>{
  let i = 0
  let changeColor =()=>{
    text.textContent = colors[i]
    body.style.backgroundColor = colors[i];
     i++
     if(i < colors.length){
      setTimeout(changeColor,1000)  
      
    }
    }
    changeColor()
  };

let  btn = document.querySelector('button').addEventListener('click',runColor)