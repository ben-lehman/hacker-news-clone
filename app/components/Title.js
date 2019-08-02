import React from 'react'
import PropTypes from 'prop-types'

export default function Title ({ url, title }) {
  return (
    <a href={url}><h2>{title}</h2></a>
  )
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired
}