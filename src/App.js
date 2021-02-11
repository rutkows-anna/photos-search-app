import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:query" component={ResultsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
