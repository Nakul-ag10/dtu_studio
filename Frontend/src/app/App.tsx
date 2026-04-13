import { RouterProvider } from "react-router";
import { router } from "./routes";
import 'flowbite';


export default function App() {
  return <RouterProvider router={router} />;
}