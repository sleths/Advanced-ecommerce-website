const SeeProductBtn = ({link, type, title = "See Product"}) => {
  return (
    <a href={link} className={`product-btn centered product-btn-${type}`}>{title}</a>
  )
}

export default SeeProductBtn;