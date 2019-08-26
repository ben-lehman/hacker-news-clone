import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts }from '../utils/api.js'
import { timeConverter } from '../utils/helper.js'
import Loading from './Loading'
import PostList from './PostList'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      user_loading: true,
      posts: null,
      posts_loading: true,
      error: null
    }
  }

  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search)

    fetchUser(id)
      .then((user) => {
        this.setState({ user, user_loading: false})

        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then((posts) => this.setState({
        posts,
        posts_loading: false,
        error: null
      }))
      .catch((message) => this.setState({
        error: message,
        user_loading: false,
        posts_loading: false
      }))
  }
  render() {
    const {user, user_loading, posts, posts_loading, error} = this.state

    if (error) {
      return <p>{ error }</p>
    }

    return (
      <React.Fragment>
        {user_loading === true
          ? <Loading />
          : <React.Fragment>
              <h1>{user.id}</h1>
              <p>
                <span>joined { timeConverter(user.created, false) }</span>
                <span> has { user.karma } karma</span>
              </p>
              <p dangerouslySetInnerHTML={{__html: user.about}}></p>
            </React.Fragment>
        }
        {posts_loading === true
          ? <Loading />
          : <React.Fragment>
              <h2>Posts</h2>
              <PostList posts={posts} />
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}