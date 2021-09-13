import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CompanyDetail from "./components/CompanyDetail";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Container className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {<Redirect to="/search" />}
          </Route>

          <Route path="/search" exact component={SearchPage} />
          <Route
            path="/company-detail/:company_name"
            exact
            render={(props) => <CompanyDetail id="890811" {...props} />}
          />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
