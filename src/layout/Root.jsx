import { Outlet } from "react-router-dom";
import Footer from "../component/SharePage/Footer";
import Navbar from "../component/SharePage/Navbar";

const Root = () => {
  return (
    <>
    <nav className="z-50 fixed text-white px-5 bg-opacity-30 bg-black top-0 w-full">
        <Navbar></Navbar>
    </nav>
      <main className="max-w-7xl px-10 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="bg-neutral text-neutral-content">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
