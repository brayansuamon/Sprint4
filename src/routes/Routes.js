import Nickname from "../components/Nickname/Nickname";
import PostMessage from "../components/PostMessage/PostMessage";
import Profile from "../components/Profile/Profile";

const routes = [
  {
    path: "/Nickname",
    Component: Nickname,
  },
  {
    path: "/PostMessage",
    Component: PostMessage,
  },
  {
    path: "/Profile",
    Component: Profile,
  },
];
export default routes;
