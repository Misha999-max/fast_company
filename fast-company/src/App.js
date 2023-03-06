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
                <Route path="/" exact />
                <Route
                    path="/login/"
                    render={(props) => <Login isAdmin={false} {...props} />}
                />
                <Route
                    path="/main/"
                    render={(props) => <Main isAdmin={false} {...props} />}
                />
                <Route
                    path="/users/:userId?"
                    render={(props) => <Users {...props} />}
                />
                <Route component={NotFaund} />
            </Switch>
        </>
    )
}

export default App
