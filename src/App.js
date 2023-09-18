import About from "./components/About";
import Experiences from "./components/Experiences";
import NameIntro from "./components/NameIntro";
import Icons from "./components/Icons";
function App() {
  return (
    <>
      <div className="flex mx-80 mt-11">
        <NameIntro />
        <About />
      </div>
      <div className="flex mx-80 mt-11">
        <Icons />
        <Experiences />
      </div>
    </>
  );
}

export default App;
