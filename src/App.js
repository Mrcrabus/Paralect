import { Route } from "react-router";

<<<<<<< HEAD
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
=======
const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Profile/>
            <div className='app-content'>
                <Repositories/>
            </div>
>>>>>>> 3eeb1394a8f69b6da595ca078ac82a2c8964bbd5

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Route path="/:login/:pageNumber?">
          <Profile user={props.user} />
        </Route>
      </div>
    </div>
  );
};

export default App;
