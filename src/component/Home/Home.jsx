import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (

        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;