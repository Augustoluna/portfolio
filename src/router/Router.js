import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from "../sections/introduction/Introduction";
import MyProjects from "../sections/myProjects/MyProjects";
import Contacts from "../sections/contacts/Contacts";
import MyKnowledge from "../sections/myKnowledge/MyKnowledge";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/intro", "/"]}>
          <Introduction />
        </Route>
        <Route exact path="/projects">
          <MyProjects />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/knowledge">
          <MyKnowledge />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
