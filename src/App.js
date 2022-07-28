import "./App.css";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rental" component={Rental} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/"  exact to="/movies" />
        <Redirect  to="/not-found" />
        {/* <Movies /> */}
      </Switch>
    </main>
  );
}

export default App;
