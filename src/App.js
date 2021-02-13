import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const show = useSelector((state) => state.modal.show);
  return (

     <div className="app">
        { show && <Modal /> }
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
