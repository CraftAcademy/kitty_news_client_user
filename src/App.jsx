import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <DisplayArticlesList />
      </Switch>
      
    </>
  );
};

export default App;
