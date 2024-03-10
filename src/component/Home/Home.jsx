import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (

        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;