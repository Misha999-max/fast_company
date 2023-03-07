/* eslint-disable react/prop-types */
import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./component/login"
import Main from "./component/main"
import NavBar from "./component/navBar"
import NotFaund from "./component/notFaund"
import Users from "./component/users"

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/login/" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route component={NotFaund} />
            </Switch>
        </>
    )
}

export default App
