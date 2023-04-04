const React = require("react");
const ReactDOM = require("react-dom/client");
const { BrowserRouter } = require("react-router-dom");
const App = require("./App");
import "./base.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
