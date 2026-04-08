import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import MonthInPictures from "./pages/MonthInPictures";
import PressCoverage from "./pages/PressCoverage";
import PressRelease from "./pages/PressRelease";
import PressConferences from "./pages/PressConferences";
import SocialMedia from "./pages/SocialMedia";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "month-in-pictures", Component: MonthInPictures },
      { path: "press-coverage", Component: PressCoverage },
      { path: "press-release", Component: PressRelease },
      { path: "press-conferences", Component: PressConferences },
      { path: "social-media", Component: SocialMedia },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
