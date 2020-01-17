import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Notice from './notice/Notice'
import Partner from './partner/Partner'
import Project from './project/Project'
import SignUp from './signUp/SignUp'
import SignUpType from './signUp/SignUpType'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Project' component={Project}/>
            <Route path='/Partner' component={Partner}/>
            <Route path='/Notice' component={Notice}/>
            <Route path='/SignUp' component={SignUp}/>
        </Switch>
    </main>
)

export default Main
