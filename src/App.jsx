import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from "react-router-dom";
import DisplayArticle from "./components/DisplayArticle";
import Header from "./components/Header"
import Footer from './components/Footer'
import CategoryMenu from './components/CategoryMenu'

const App = () => {
  return (
    <>
      <Header />
      <CategoryMenu />
      <Switch>
        <Route exact path="/" component={DisplayArticlesList}></Route>
        <Route exact path="/articles/:id" component={DisplayArticle}></Route>
        {/* <Route exact path="/articles/:category" component={DisplayArticlesList}></Route> */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
