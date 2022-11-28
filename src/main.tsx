import * as React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import { Reset } from 'styled-reset'
import { GlobalProvider } from "./context/Global";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
