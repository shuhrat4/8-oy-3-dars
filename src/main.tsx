import ReactDOM from "react-dom";
import App from "./App";
import { CountryContext } from "./Context/Context";

ReactDOM.render(
  <CountryContext>
    <App />
  </CountryContext>,
  document.getElementById("root")
);
