export default function ({ img, children }) {
  return (
    <div className="post">
      <img src={img} className="thumbnail" />
      {children}
    </div>
  )
}