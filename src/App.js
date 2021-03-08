import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import List  from "./components/list/list";
import Add from "./components/add/add"
import { AppBar,Typography,Toolbar } from "@material-ui/core";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  render() {
    return (<div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            WELCOME TO WIDGETS PAGE
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path={"/list"} component={List}/>
        <Route path={"/add"} component={Add}/>
        <Redirect exact path={"/"} to={`/list`}/>
      </Switch>
      </div>
    );
  }
}

export default App;
