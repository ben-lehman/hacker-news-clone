import React from 'react'
import PropTypes from 'prop-types'

import { fetchMainPosts } from '../utils/api'

function PostList ({ posts }) {
  if (posts.length === 0) {
    return <p>No Posts</p>
  }

  return(
    <ul>
      {posts.map((post) => {
        console.log(post)
        return (
          <li key={post.id}>
            <a href={post.url}><h2>{post.title}</h2></a>
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