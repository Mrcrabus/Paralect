<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

ReactDOM.render(<
        BrowserRouter>
        <
            Provider store={store}>
            <
                App / >
        <
    /Provider> <
    /BrowserRouter>,
    document.getElementById('root')
);
>>>>>>> 3eeb1394a8f69b6da595ca078ac82a2c8964bbd5
