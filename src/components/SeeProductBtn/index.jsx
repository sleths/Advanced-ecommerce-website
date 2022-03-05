const SeeProductBtn = ({link, type}) => {
  return (
    <a href={link} className={`product-btn centered product-btn-${type}`}>See Product</a>
  )
}

export default SeeProductBtn;