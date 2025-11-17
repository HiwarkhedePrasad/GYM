import AboutUsSection from "./component/About";
import ClassesSection from "./component/Classes";
import HeroSection from "./component/hersosection";
import HomeHeroInfo from "./component/Info";
import Header from "./component/navbar";
import TrainersSection from "./component/Trainer";

export default function Home() {
  return(
    <><Header/>
      <HeroSection/>
      <HomeHeroInfo/>
      <AboutUsSection/>
      <ClassesSection/>
      <TrainersSection/>
    </>
  )
}