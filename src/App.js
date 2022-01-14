import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import GroupForm from "./GroupForm";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={LoginSocial} path="/login" />
          <Route component={LoginForm} path="/" exact />
          <Route component={GroupForm} path="/create" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
