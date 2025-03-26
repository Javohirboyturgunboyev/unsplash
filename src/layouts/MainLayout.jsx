import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
