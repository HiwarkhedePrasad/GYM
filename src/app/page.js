import AboutUsSection from "./component/About";
import ClassesSection from "./component/Classes";
import Footer from "./component/Footer";
import HeroSection from "./component/hersosection";
import HomeHeroInfo from "./component/Info";
import Header from "./component/navbar";
import TrainersSection from "./component/Trainer";
import MobileActionBar from "./component/MobileActionBar";
import MembershipPlans from "./component/MembershipPlans";
import Facilities from "./component/Facilities";
import Testimonials from "./component/Testimonials";
import ContactForm from "./component/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Main content wrapper */}
      <main className="bg-black text-white pb-20 lg:pb-0"> {/* Added padding-bottom for mobile bar */}
        
        <section id="home" className="scroll-mt-24">
          <HeroSection />
          <HomeHeroInfo />
        </section>

        <section id="about" className="scroll-mt-24">
          <AboutUsSection />
        </section>

        <section id="facilities" className="scroll-mt-24">
          <Facilities />
        </section>

        <section id="classes" className="scroll-mt-24">
          <ClassesSection />
        </section>

        <section id="trainers" className="scroll-mt-24">
          <TrainersSection />
        </section>

        <section id="membership" className="scroll-mt-24">
          <MembershipPlans />
        </section>

        <section id="testimonials" className="scroll-mt-24">
          <Testimonials />
        </section>

        <ContactForm />

        <section id="footer" className="scroll-mt-24">
          <Footer />
        </section>

      </main>
      <MobileActionBar />
    </>
  );
}