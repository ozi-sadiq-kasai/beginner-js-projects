let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let show = document.querySelector('body')
let display = document.querySelector('p')


let runColor = ()=>{
  
 color = '#'
 for(let i = 0; i < 6;i++){
  color += hex[
    Math.floor(Math.random()*hex.length)]
 }
 show.style.backgroundColor = color
 display.textContent=color
 }
 


let btn = document.querySelector('button').addEventListener('click',runColor)

// let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// let show = document.querySelector('body');
// let display = document.querySelector('p');

// let color = '#';

// function runColor() {
//   let digit = hex[Math.floor(Math.random() * hex.length)];
//   color += digit;
//   show.style.backgroundColor = color;
//   display.textContent = color;
//   console.log(color);
// }

// let btn = document.querySelector('button').addEventListener('click', runColor);