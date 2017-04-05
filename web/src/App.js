import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import Signup from './pages/signup'
import Login from './pages/login'
import Children from './pages/children'
import Family from './pages/family'
import Child from './pages/child'
import Park from './pages/park'
import ActivityDetail from './pages/activity-detail'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='pa1'>
          <header>
            <h1 className="bg-light-green mw7 center pa1 br2-ns ba b--black-10 tc">
              Parker and Parks</h1>
          </header>
          <main>
            <Route expact path='/cpc' component={LandingPage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/children' component={Children} />
            <Route path='/family' component={Family} />
            <Route path='/child/:id' component={Child} />
            <Route path='/park' component={Park} />
            <Route path='/activitydetail' component={ActivityDetail} />
          </main>

        </div>
      </BrowserRouter>

    )
  }
}

export default App
