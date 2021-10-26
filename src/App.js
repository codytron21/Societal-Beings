import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"


import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";

export default function App() {
    return (
        <Router>
            <Switch>
                {/* we added "exact" before path so that it deosnt stop at "/" and see complete path */}
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route>
            </Switch>
        </Router>

    )
}
