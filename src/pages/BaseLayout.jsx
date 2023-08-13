// import { Header } from "../components/header";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom/dist";
import { useLocation } from "react-router-dom/dist";
import { useTitle } from "../hooks/title";
const BaseLayout = () => {
  const location = useLocation();
  useTitle(location.pathname);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
