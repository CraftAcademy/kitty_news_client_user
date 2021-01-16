import React from "react";
import DisplayArticlesList from "./components/DisplayArticlesList";
import { Switch, Route } from "react-router-dom";
import DisplayArticle from "./components/DisplayArticle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryMenu from "./components/CategoryMenu";
import { Elements } from "react-stripe-elements";

const App = () => {
  return (
    <>
      <Header />
      <Elements>
        <CategoryMenu />
      </Elements>
      <Switch>
        <Route exact path="/" component={DisplayArticlesList}></Route>
        <Route exact path="/articles/:id" component={DisplayArticle}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
