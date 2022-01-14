import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import GroupForm from "./GroupForm";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";
import HomeSidebar from "./HomeSidebar";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={LoginSocial} path="/login" />
          <Route component={LoginForm} path="/" exact />
          <Route component={GroupForm} path="/create" />
          <Route component={HomeSidebar} path={"/room-vote"} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
