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
import { Dashboard } from "./Dashboard";
import { OverView } from "./OverView";
import { Subjects } from "./Subjects";
import { Material } from "./Material";
import { Profile } from "./Profile";
import { UpdatePassword } from "./UpdatePassword";
import { Settings } from "./Settings";
import { ChangeProfile } from "./ChangeProfile";

const useAuth = () => {
  return localStorage.getItem("@token");
};

function PrivateOutlet() {
  // const auth = useAuth();
  // return auth ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />;
  console.log("private")
  return <Outlet />
}

function DashboardOutlet() {
  // const auth = useAuth();
  // return auth ? <Outlet /> : <Navigate to="/auth" />;
  console.log("dashboard")
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<GuestOutlet />}>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<PrivateOutlet />}>

          <Route path="settings" element={<Settings />} />

          <Route path="dashboard" element={<DashboardOutlet />}>
            <Route index element={<Dashboard />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="overview" element={<OverView />} />
            <Route path="material" element={<Material />} />
          </Route>

          <Route path="profile" element={<ProfileOutlet />}>
            <Route index element={<Profile />} />
            <Route path="update-password" element={<UpdatePassword />} />
            <Route path="update-profile" element={<ChangeProfile />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}
