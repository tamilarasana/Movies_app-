import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import { ToastContainer } from "react-bootstrap";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import LoginForm from './components/loginForm';
import RegisterForm from "./components/registerForm";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
          {/* <Movies /> */}
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
