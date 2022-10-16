import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const loading = () => <div>Loading...</div>;
const Home = React.lazy(() => import("./containers/Home/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={loading()}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
          <Footer />
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
