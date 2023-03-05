


























import PropTypes from 'prop-types'


export const GiftItem = ({title, url}) => {
  return (
    <>
    <div className="card">
          <p>{title}</p>
          <p><img src={url} alt={title}/></p>
          </div>
    </>
  )
}


GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired
}
