import About from "./sections/About";
import Commuinty from "./sections/Commuinty";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import LawFirm from "./sections/LawFirm";
import Services from "./sections/Services";

const Home = () => {
    return (
        <div>
            <section id="home" className="min-h-screen w-full bg-gray-50 scroll-mt-[85px]">
                <Hero/>
            </section>
            <section id="services" className="h-full container-style py-20">
                <Services/>
            </section>
            <section id="law-frim" className="min-h-screen w-full bg-gray-50">
                <LawFirm/>
            </section>
            <section id="commuinty" className="h-full w-full bg-gray-50">
                <Commuinty/>
            </section>
            <section id="about-us" className="min-h-screen bg-gray-50">
                <About/>
            </section>
            <section id="contact-us" className="h-full py-20">
                <Contact/>
            </section>
           
        </div>
    )
}

export default Home;