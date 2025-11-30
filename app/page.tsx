import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Navigation";
import ProjectSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Leadership from "@/components/Leadership";
// import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-50">
      <Header />
      <Hero />
      <Testimonials />
      <Leadership />
      <About />
      <ServicesSection />
      <Industries />
      {/* <PortfolioSection /> */}
      <ProjectSection />
      <Contact />
      <Footer />
    </main>
  );
}
