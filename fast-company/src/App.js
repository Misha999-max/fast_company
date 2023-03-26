/* eslint-disable react/prop-types */
import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./loyuts/login"
import Main from "./loyuts/main"
import NavBar from "./component/navBar"
import NotFound from "./component/notFound"
import Users from "./loyuts/users"

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/login/" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default App
