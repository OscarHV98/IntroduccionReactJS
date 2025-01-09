import Header from "../components/Header";
import Body from "../components/Home/Body";
import Footer from "../components/Home/Footer";
import Github from "../components/Home/Github";
import Logo from "../components/Home/Logo";

const Home = () =>{
    return (
        <div>
            <Header/>
            <Logo/>
            <Github/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;