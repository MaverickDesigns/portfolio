import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { PortfolioProvider } from "./store/PortfolioStore";
import AboutMe from "./pages/AboutMe";
import Line from "./components/Line";
import MyProjects from "./pages/MyProjects";
import Maintenance from "./pages/maintenance";
import { useEffect } from "react";

const App = () => {
  
  return (
    <PortfolioProvider>
      <Router>
        {/* <Navbar /> */}
        <div className="">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/maintanance" element={<Maintenance />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/myprojects" element={<MyProjects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          {/* <div className="right">
            <DynamicLine />
          </div> */}
        </div>
      </Router>
    </PortfolioProvider>
  );
};

const DynamicLine = () => {
  const location = useLocation();
  const showLines = location.pathname !== "/myprojects";

  return showLines ? (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </>
  ) : null;
};

export default App;
