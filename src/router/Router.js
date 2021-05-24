import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from "../sections/introduction/Introduction";
import MyProjects from "../sections/myProjects/MyProjects";
import Contacts from "../sections/contacts/Contacts";

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
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
