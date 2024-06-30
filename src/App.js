import Navbar from "./Components/Navbar";
import "./app.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import GCC from "./Components/GCC";
import GitHubStat from "./Components/GitHubStat";
import Projects from "./Components/Projects";
import GetInTouch from "./Components/GetInTouch";
import { useEffect, useState } from "react";
import { Design } from "./Components/Design";
import Loader from "./Components/Loader";
import Socials from "./Components/Socials";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <GCC />
      <GitHubStat />
      <Projects />
      <GetInTouch />
      <Design />
      <Socials />
    </>
  );
}

export default App;

//  65608cc219fbcdddbe7590c54bde268455bbff36
