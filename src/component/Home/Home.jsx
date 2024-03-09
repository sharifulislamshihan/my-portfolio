import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (

        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;