import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Firebase/auth-context";
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
