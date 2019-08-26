import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import User from './components/User'
import Post from './components/Post'



class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path='/' render={() => <Posts type='top' />} />
        <Route path='/new' render={() => <Posts type='new' />} />
        <Route path='/user' component={User} />
        <Route path='/post' component={Post} />
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)