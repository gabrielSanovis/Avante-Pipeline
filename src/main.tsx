import * as React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./pages/App";
import {SignIn} from './pages/SignIn'
import { SignUp } from "./pages/SignUp";
import { UpdatePassword } from "./pages/UpdatePassword"
import { ForgotPassword } from "./pages/ForgotPassword"
import { ChangeProfile } from "./pages/ChangeProfile";
import {GlobalStyle} from './style/styles'
import { Reset } from 'styled-reset'
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <ChangeProfile />
  </React.StrictMode>
);
