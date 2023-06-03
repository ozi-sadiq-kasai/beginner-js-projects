
const people = [  
  { 
  name:'Alicia',
  pix: './images/free.jpg',
  title:'free',
  lorem:'helllllllllooooooooooo'
},
{ 
  name:'maria',
  pix: './images/golden_hand.jpg',
  title:'hands',
  lorem:'hiiiiiiiiiiiii'
},
{ 
  name:'james',
  pix: './images/mountain_hike.jpg',
  title:'mountains',
  lorem:'heyyyyyyyyy'
},
]
// Listeners

let name = document.querySelector('.card__name')
let image = document.querySelector('.card__image')
let title = document.querySelector('.card__title')
let lorem = document.querySelector('.card__lorem')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let btn = document.querySelector('.card__btn')

   

// Current item
let currentPerson = 0

// write a function getting the values of a current item
let showPerson = ()=>{
  let item = people[currentPerson]
  name.textContent = item.name
  title.textContent = item.title
  lorem.textContent = item.lorem
  image.src= item.pix
}


// page load a current item
window.addEventListener('DOMContentLoaded',showPerson)


// write a function to add the current item in the previous and next btn increase and decrease
right.addEventListener('click',()=>{
  
  currentPerson++
  if(currentPerson > people.length-1){
      currentPerson = 0
  }
  showPerson()
})
left.addEventListener('click',()=>{
  showPerson()
  currentPerson--
  if(currentPerson < 0){
      currentPerson = people.length-1
  }

})


// write a function to get the random item using Math.Random and Math.floor
function randomPerson(){
  currentPerson =   Math.floor(Math.random() * people.length)
  showPerson()
}
btn.addEventListener('click',randomPerson)