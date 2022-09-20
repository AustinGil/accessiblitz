import './Card.css'

export default function ({ img, children }) {
  return (
    <div className="card">
      <img src={img} className="card__thumbnail" />
      <div className='card__content'>
        {children}
      </div>
    </div>
  )
}