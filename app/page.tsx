import About from "./components/Landing/About";
import Advantage from "./components/Landing/Advantage";
import LandingPage from "./components/Landing/LandingPage";
import Portfolio from "./components/Landing/Portfolio";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <Advantage />
      <Portfolio />
    </div>
  );
}
