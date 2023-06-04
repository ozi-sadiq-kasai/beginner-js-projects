const nav = document.querySelector('.primary-nav')
const bar = document.querySelector('span')

bar.addEventListener('click',() => {
  const visibility = nav.getAttribute('data-visible')

  if(visibility === 'false'){
    nav.setAttribute('data-visible',true)
  }
  else{
    nav.setAttribute('data-visible',false)
  }
})