import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { useEffect, useState } from "react";
import LoaderMain from "./components/LoaderMain/LoaderMain";

const App = () => {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <LoaderMain />}
      <div className={`relative z-0 overflow-x-hidden`}>
        <div>
          <Navbar toggle={toggle} setToggle={setToggle} />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
};
export default App;
