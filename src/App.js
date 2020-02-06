import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { Route } from "react-router";
import store from "./store";
import EventsListContainer from "./components/EventsListContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/" exact component={EventsListContainer}></Route>
      </div>
    </Provider>
  );
}

export default App;
