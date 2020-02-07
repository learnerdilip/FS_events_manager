import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { Route } from "react-router";
import store from "./store";
import EventsListContainer from "./components/EventsListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/event" exact component={EventsListContainer}></Route>
        <Route path="/event/:id" component={EventDetailsContainer} />
      </div>
    </Provider>
  );
}

export default App;
