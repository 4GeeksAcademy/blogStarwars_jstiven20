import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <>
          <Navbar />
          <ScrollToTop />
          <Outlet />
          {/* <Footer /> */}
        </>
      );
    };

    export default Layout;