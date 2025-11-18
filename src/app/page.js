import AboutUsSection from "./component/About";
import ClassesSection from "./component/Classes";
import Footer from "./component/Footer";
import HeroSection from "./component/hersosection";
import HomeHeroInfo from "./component/Info";
import Header from "./component/navbar";
import TrainersSection from "./component/Trainer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Main content wrapper */}
      <main className="bg-black text-white"> {/* Optional base styling */}
        
        <section id="home" className="scroll-mt-24">
          <HeroSection />
          <HomeHeroInfo />
        </section>

        <section id="about" className="scroll-mt-24">
          <AboutUsSection />
        </section>

        <section id="classes" className="scroll-mt-24">
          <ClassesSection />
        </section>

        <section id="trainers" className="scroll-mt-24">
          <TrainersSection />
        </section>

        <section id="footer" className="scroll-mt-24">
          <Footer />
        </section>

      </main>
    </>
  );
}