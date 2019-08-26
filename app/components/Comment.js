import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'

export default function Comment ({comment}) {
  return (
    <div className='comment'>
      <PostMetaInfo
        id={comment.id}
        by={comment.by}
        time={comment.time}
      />
      <p dangerouslySetInnerHTML={{__html: comment.text}}></p>
    </div>
  )
}