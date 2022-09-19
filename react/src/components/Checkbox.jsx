export default function ({ children }) {
  return (
    <div className="custom-checkbox" onClick={(event) => event.target.classList.toggle('active')}>
      {children}
    </div>
  )
}