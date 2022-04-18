import About from "./components/About";
import Conttact from "./components/Conttact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Work from "./components/Work";
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Conttact/>
    </div>
  );
}

export default App;
