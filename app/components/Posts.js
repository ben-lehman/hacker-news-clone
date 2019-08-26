import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetchMainPosts } from '../utils/api'
import PostList from './PostList'
import Loading from './Loading'

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
      return <Loading />
    }

    if (error) {
      return <p>{ error }</p>
    }

    return <PostList posts={posts} />
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}