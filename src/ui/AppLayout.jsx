import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col bg-main-bg-gray" key={pathname}>
      <NavBar />
      <div className="mx-auto flex min-h-screen w-full flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
