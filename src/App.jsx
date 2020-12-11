import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from 'react-router-dom';
import ShowArticle from './components/ShowArticle';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={DisplayArticlesList}></Route>
      <Route exact path ="/articles/:id" component={ShowArticle}></Route>
      <DisplayArticlesList /> 
      </Switch>
    </>
  );
};

export default App;
