import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path='/' render={() => <Posts type='top' />} />
        <Route path='/new' render={() => <Posts type='new' />} />
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)