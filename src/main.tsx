import ReactDOM from "react-dom";
import App from "./App";
import { CountryContext } from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CountryContext>
    <App />
  </CountryContext>
);
