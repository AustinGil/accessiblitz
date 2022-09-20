import { useState } from "react"
import './Dialog.css'

export default function ({ toggle, children }) {
  const [isOpen, setOpen] = useState(false)
  function close(event) {
    if (event.currentTarget !== event.target) return
    setOpen(false)
  }
  return (
    <>
      <div className="btn" onClick={() => setOpen(!isOpen)}>{toggle}</div>

      {isOpen && (
        <div className="dialog" onClick={close}>
          <div className="dialog__content">
            {children}
          </div>
        </div>
      )}
    </>
  )
}