import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< Updated upstream
// import * as semantic from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import * as semantic from "semantic-ui-react";
import NormalLeague from "./components/league/normalLeague";
ReactDOM.render(<NormalLeague />, document.getElementById("root"));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
