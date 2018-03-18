const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
const customRadios = Array.from(document.querySelectorAll('.customRadio'))
const customCheckboxes = Array.from(
  document.querySelectorAll('.customCheckbox')
)
const switches = Array.from(document.querySelectorAll('.switch'))

menu.addEventListener('click', () => {
  nav.classList.toggle('open')
})

customRadios.forEach(el => {
  el.addEventListener('click', e => {
    const previousEl = el.parentElement.querySelector('.active')
    if (previousEl) previousEl.classList.remove('active')

    e.target.classList.add('active')
  })
})

customCheckboxes.forEach(el => {
  el.addEventListener('click', e => {
    e.target.classList.toggle('active')
  })
})

switches.forEach(el => {
  el.addEventListener('click', e => {
    e.target.classList.toggle('active')
  })
})
