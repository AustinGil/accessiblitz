const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
const options = Array.from(document.querySelectorAll('.option'))
const checkboxes = Array.from(document.querySelectorAll('.checkbox'))
const switches = Array.from(document.querySelectorAll('.switch'))

menu.addEventListener('click', () => {
  nav.classList.toggle('open')
})

switches.forEach(el => {
  el.addEventListener('click', e => {
    e.target.classList.toggle('active')
  })
})

options.forEach(el => {
  el.addEventListener('click', e => {
    const previousEl = el.parentElement.querySelector('.active')
    if (previousEl) previousEl.classList.remove('active')

    e.target.classList.add('active')
  })
})

checkboxes.forEach(el => {
  el.addEventListener('click', e => {
    e.target.classList.toggle('active')
  })
})
