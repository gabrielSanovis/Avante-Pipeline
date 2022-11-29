import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgotPassword } from "./ForgotPassword";
import { Profile } from "./Profile";
import { UpdatePassword } from "./UpdatePassword";
import { ChangeProfile } from "./ChangeProfile";
import { GlobalStyle } from "../style/styles";
import { Context, IGlobalContext } from "../context/Global";
import React from "react";

const useAuth = () => {
  return localStorage.getItem("@token");
};

function PrivateOutlet() {
  // const auth = useAuth();
  // return auth ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />;
  console.log("private")
  return <Outlet />
}

function ProfileOutlet() {
  // const auth = useAuth();
  // return auth ? <Outlet /> : <Navigate to="/auth" />;
  console.log("profile")
  return <Outlet />
}

const GuestOutlet = () => {
  // const auth = useAuth();
  // return auth ? <Navigate to="/panel" /> : <Outlet />;
  console.log("guest")
  return <Outlet />
};


export function App() {

  const { isOpen } = React.useContext(Context) as IGlobalContext;


  return (
    <>
      <GlobalStyle isOpen={isOpen} />

      <Router basename="/Avante-Pipeline/">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<GuestOutlet />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route element={<PrivateOutlet />}>

            <Route path="profile" element={<ProfileOutlet />}>
              <Route index element={<Profile />} />
              <Route path="update-password" element={<UpdatePassword />} />
              <Route path="update-profile" element={<ChangeProfile />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
}
