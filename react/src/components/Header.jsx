import { useState } from 'react'
export default function () {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="header">
      <a href="/" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768">
          <path d="M681.6 147.2l-256-128C400 6.4 368 6.4 339.2 19.2l-256 128c-32 16-51.2 48-51.2 83.2v304c0 35.2 19.2 70.4 54.4 86.4l256 128c12.8 6.4 28.8 9.6 41.6 9.6 16 0 28.8-3.2 41.6-9.6l256-128c32-16 54.4-48 54.4-86.4v-304c0-35.2-19.2-67.2-54.4-83.2zM371.2 73.6c3.2-3.2 9.6-3.2 12.8-3.2 6.4 0 9.6 0 12.8 3.2L633.6 192 384 316.8 134.4 192 371.2 73.6zM112 566.4c-9.6-6.4-16-19.2-16-28.8V243.2l256 128v313.6L112 566.4zm540.8 0L416 684.8V371.2l256-128v294.4c0 12.8-6.4 22.4-19.2 28.8z" />
        </svg>
      </a>

      <div className="menu" onClick={() => setOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768">
          <path d="M96 192h576v64.5H96V192zm0 223.5v-63h576v63H96zM96 576v-64.5h576V576H96z" />
        </svg>
      </div>

      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}