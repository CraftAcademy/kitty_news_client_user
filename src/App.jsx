import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path ="/articles/:id" component={ShowArticle}/>
      <DisplayArticlesList /> 
      </Switch>
    </>
  );
};

export default App;
