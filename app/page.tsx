import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Emergency from "@/components/Emergency";
import NewPatientForm from "@/components/NewPatientForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Locations />
        <Emergency />
        <NewPatientForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
