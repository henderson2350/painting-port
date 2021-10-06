import "./App.css";
import React from 'react';
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Available from "./pages/Available";
import Contact from "./pages/Contact"
import Portraiture from "./pages/Portraiture";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router basename = "/">
      <div className="App">
        <p>{data}</p>
        <Route exact path = "/" component = {Homepage} />
        <Route exact path = "/gallery" component = {Gallery} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/available" component = {Available} />
        <Route exact path = "/portraiture" component = {Portraiture} />
        <Route exact path = "/contact" component = {Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
