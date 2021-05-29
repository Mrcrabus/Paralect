import {Route} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Route path="/:login/:pageNumber?">
                    <Profile />
                </Route>
            </div>
        </div>
    );
};

export default App;
