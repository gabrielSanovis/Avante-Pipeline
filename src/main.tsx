import * as React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./pages/App";
import {SignIn} from './pages/SignIn'
import { SignUp } from "./pages/SignUp";
import { UpdatePassword } from "./pages/UpdatePassword"
import { ForgotPassword } from "./pages/ForgotPassword"
import {GlobalStyle} from './style/styles'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ForgotPassword />
  </React.StrictMode>
);
