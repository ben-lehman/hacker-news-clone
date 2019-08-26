import React from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetchItem, fetchComments }from '../utils/api.js'
import Loading from './Loading'
import Title from './Title'
import PostMetaInfo from './PostMetaInfo'
import Comment from './Comment'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      comments: null,
      error: null,
      post_loading: true,
      comments_loading: true
    }
  }

  componentDidMount() {
    const {id} = queryString.parse(this.props.location.search)

    fetchItem(id)
      .then((post) => {
        this.setState({
          post,
          post_loading: false
        })

        return fetchComments(post.kids || [])
      })
      .then((comments) => this.setState({
        comments,
        comments_loading: false
      }))
      .catch((message) => this.setState({
        error: message,
        post_loading: false,
        comments_loading: false
      }))
  }
  render() {
    const {post, comments, error, post_loading, comments_loading} = this.state

    if (error) {
      return <p>{ error }</p>
    }

    return (
      <React.Fragment>
          {post_loading === true
            ? <Loading />
            : <React.Fragment>
                <div className="comment--title">
                <Title url={post.url} title={post.title} />
                <PostMetaInfo
                  id={post.id}
                  by={post.by}
                  time={post.time}
                  descendants={post.descendants}
                />
                </div>
              </React.Fragment>
          }
          {comments_loading === true
            ? <Loading />
            : <React.Fragment>
                {comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      comment={comment}
                    />
                  )
                })}
              </React.Fragment>
          }
        </React.Fragment>
      )
  }

}