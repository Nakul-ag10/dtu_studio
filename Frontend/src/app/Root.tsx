import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import Navbar_copy from "./components/Navbar_copy";
export default function Root() {
  return (
    <AuthProvider>
      <DataProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {/* <Navbar_copy /> */}
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </DataProvider>
    </AuthProvider>
  );
}
