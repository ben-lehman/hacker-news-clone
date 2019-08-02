import React from 'react'
import PropTypes from 'prop-types'

import { fetchMainPosts } from '../utils/api'
import Title from './Title.js'
import PostMetaInfo from './PostMetaInfo'

function PostList ({ posts }) {
  if (posts.length === 0) {
    return <p>No Posts</p>
  }

  return(
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <li key={post.id} className="post">
            <Title url={post.url} title={post.title} />
            <PostMetaInfo
              id={post.id}
              by={post.by}
              time={post.time}
              descendants={post.descendants}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      error: null,
      loading: true
    }

    this.handleFetch = this.handleFetch.bind(this)
  }
  componentDidMount () {
    this.handleFetch()
  }
  handleFetch () {
    fetchMainPosts(this.props.type)
      .then((posts) => this.setState({
        posts,
        loading: false,
        error: null
      }))
      .catch(({ message }) => this.setState({
        error: message,
        loading: false
      }))
  }

  render() {
    const { posts, error, loading } = this.state

    if (loading === true) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>{ error }</p>
    }

    return <PostList posts={posts} />
  }
}

PostList.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}