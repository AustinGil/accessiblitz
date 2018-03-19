menu.addEventListener('keydown', event => {
  // console.log(event)
  if (event.keyCode === 13) {
    // The enter key was pressed
    event.target.click()
  }
})

jsSearchers.forEach(el => {
  // el.removeEventListener('keydown', jsSearch)
  el.addEventListener('submit', event => {
    event.preventDefault()

    const searchInput = el.querySelector('.js-search-input')
    if (searchInput && searchInput.value) {
      alert(`You searched for ${searchInput.value}`)
      window.location.search = `${searchInput.name}=${searchInput.value}`
      searchInput.value = ''
    }
  })
})
