import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import GroupForm from "./GroupForm";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";
import HomeSidebar from "./HomeSidebar";
import AnnouncingVote from "./AnnouncingVote/announcingVote";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={LoginSocial} path="/login" />
          <Route component={LoginForm} path="/" exact />
          <Route component={GroupForm} path="/create" />
          <Route component={HomeSidebar} path={"/room-vote"} />
          <Route component={AnnouncingVote} path={"/announcingVote"} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
