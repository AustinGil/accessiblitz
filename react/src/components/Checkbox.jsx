export default function ({ children }) {
  return (
    <div className="custom-checkbox" onClick={event => {
      // @ts-ignore
      event.target.classList.toggle("active")
    }}>
      {children}
    </div>
  )
}