menu.addEventListener('keydown', event => {
  // console.log(event)
  if (event.keyCode === 13) {
    // The enter key was pressed
    event.target.click()
  }
})
