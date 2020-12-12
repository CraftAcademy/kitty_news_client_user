import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from 'react-router-dom';
import DisplayArticle from './components/DisplayArticle';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={DisplayArticlesList}></Route>
      <Route exact path ="/articles/:id" component={DisplayArticle}></Route>
      </Switch>
    </>
  );
};

export default App;
