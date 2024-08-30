import Main from "./components/Main";
import Project from "./components/Project";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contact />
    </>
  );
}

export default App;
