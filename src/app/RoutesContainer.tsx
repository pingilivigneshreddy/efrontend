import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";
import Dashboard from "pages/dashboard";

const Feed = loadable(() => import("pages/feed"));
const MyNetwork = loadable(() => import("pages/my-network"));
const Invitations = loadable(() => import("pages/my-network/invitations"));
const MainHeader = loadable(() => import("layouts/mainHeader"));
const Profile = loadable(() => import("pages/profile"));
const Connections = loadable(() => import("pages/connections"));
const Signup = loadable(() => import("pages/signup"));
const Signin = loadable(() => import("pages/signin"));

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="feed" element={<Feed />} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="my-network" element={<MyNetwork />} />
          <Route path="my-network/invitations" element={<Invitations />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connections" element={<Connections />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default RoutesContainer;
