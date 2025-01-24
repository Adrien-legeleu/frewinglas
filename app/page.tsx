import About from "./components/Landing/About";
import About2 from "./components/Landing/About2";
import Advantage from "./components/Landing/Advantage";
import LandingPage from "./components/Landing/LandingPage";
import Portfolio from "./components/Landing/Portfolio";
import Review from "./components/Landing/Review";

export default function Home() {
  return (
    <div className="space-y-10">
      <LandingPage />
      <About />
      <Advantage />
      <About2 />
      <Review />
      <Portfolio />
    </div>
  );
}
