const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
const customRadios = Array.from(document.querySelectorAll('.customRadio'))
const customCheckboxes = Array.from(
  document.querySelectorAll('.customCheckbox')
)
const switches = Array.from(document.querySelectorAll('.switch'))
const jsSearchers = Array.from(document.querySelectorAll('.js-search'))

menu.addEventListener('click', () => {
  nav.classList.toggle('open')
})

customRadios.forEach(el => {
  el.addEventListener('click', event => {
    const previousEl = el.parentElement.querySelector('.active')
    if (previousEl) previousEl.classList.remove('active')

    event.target.classList.add('active')
  })
})

customCheckboxes.forEach(el => {
  el.addEventListener('click', event => {
    event.target.classList.toggle('active')
  })
})

switches.forEach(el => {
  el.addEventListener('click', event => {
    event.target.classList.toggle('active')
  })
})

function jsSearch(event) {
  if (event.keyCode === 13 && event.target.value) {
    alert(`You searched for ${event.target.value}`)
    event.target.value = ''
  }
}

jsSearchers.forEach(el => {
  el.addEventListener('keydown', jsSearch)
})
