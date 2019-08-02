import React from 'react'
import PropTypes from 'prop-types'

function timeConverter(unix_time) {
  let date = new Date(unix_time * 1000);
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let hour = ((date.getHours() + 11) % 12 + 1)
  let suffix = (date.getHours() >= 12)? 'PM' : 'AM';
  let min = "0" + date.getMinutes()

  return `${day}/${month}/${year}, ${hour}:${min.substr(-2)} ${suffix}`

}

export default function PostMetaInfo ({ id, by, time, descendants }) {
  let post_time = timeConverter(time)

  return (
    <p className="post-meta-info">{`by: ${by} on ${post_time} with ${descendants} comments`}</p>
  )
}

PostMetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired
}