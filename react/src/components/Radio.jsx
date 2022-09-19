export default function ({ children }) {
  function onClick(event) {
    const previousEl = event.target.parentElement.querySelector(".active")
    if (previousEl) {
      previousEl.classList.remove("active")
    }

    event.target.classList.add("active")
  }
  return (
    <div className="custom-radio" onClick={onClick}>
      {children}
    </div>
  )
}