import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/:query" component={ResultsPage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
