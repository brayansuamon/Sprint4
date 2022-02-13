import Nickname from "../components/Nickname/Nickname";
import PostMessage from "../components/PostMessage/PostMessage";
import Profile from "../components/Profile/Profile";

const routes = [
  {
    path: "/Nickname",
    component: Nickname,
  },
  {
    path: "./PostMessage",
    component: PostMessage,
  },
  {
    path: "./Profile",
    component: Profile,
  },
];
export default routes;
