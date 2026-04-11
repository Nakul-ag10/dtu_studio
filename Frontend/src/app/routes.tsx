import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import MonthInPictures from "./pages/MonthInPictures";
import PressCoverage from "./pages/PressCoverage";
import PressRelease from "./pages/PressRelease";
import PressReleaseDetail from "./pages/PressReleaseDetail";
import PressConferences from "./pages/PressConferences";
import SocialMedia from "./pages/SocialMedia";
import Team from "./pages/Team";
import Services from "./pages/Services";
import StudioCharges from "./pages/StudioCharges";
import StudioTeam from "./pages/StudioTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminMonthInPictures from "./pages/admin/AdminMonthInPictures"
import AdminPressConferences from "./pages/admin/AdminPressConferences";
import AdminPressCoverages from "./pages/admin/AdminPressCoverages";
import AdminPressReleases from "./pages/admin/AdminPressReleases";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "month-in-pictures", Component: MonthInPictures },
      { path: "press-coverage", Component: PressCoverage },
      { path: "press-release", Component: PressRelease },
      { path: "press-release/:id", Component: PressReleaseDetail },
      { path: "press-conferences", Component: PressConferences },
      { path: "social-media", Component: SocialMedia },
      { path: "team", Component: Team },
      { path: "services", Component: Services },
      { path: "studio-charges", Component: StudioCharges },
      { path: "studio-team", Component: StudioTeam },
      { path: "contact", Component: Contact },
      { path: "login", Component: Login },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/month-in-pictures",
        element: (
          <ProtectedRoute>
            <AdminMonthInPictures />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/press-conferences",
        element: (
          <ProtectedRoute>
            <AdminPressConferences />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/press-coverages",
        element: (
          <ProtectedRoute>
            <AdminPressCoverages />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/press-releases",
        element: (
          <ProtectedRoute>
            <AdminPressReleases />
          </ProtectedRoute>
        ),
      },
      { path: "*", Component: NotFound },
      { path: "test", Component: Test}
    ],
  },
]);
