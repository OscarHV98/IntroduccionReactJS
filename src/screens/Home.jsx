import OpenLink from "../components/Core/OpenLink";
import Header from "../components/Header";
import Body from "../components/Home/Body";
import Footer from "../components/Home/Footer";
// import Github from "../components/Home/Github";
// import Logo from "../components/Home/Logo";
import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import githubLogoDos from '../assets/githubDos.svg';
import '../styles/styles.css';
import { useSelector } from "react-redux";

const Home = () =>{
    const count = useSelector((state) => state.counter.value);
    return (
        <div className="mtop30">
            <Header/>
            {/* <Logo/>
            <Github/> */}
            <div className="content-link">
                <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo}/>
                <OpenLink redirectURL="https://react.dev" logoImage={reactLogo}/>
                <OpenLink redirectURL="https://github.com/OscarHV98/IntroduccionReactJS" logoImage={githubLogoDos}/>
            </div>

            <span className="counter-value">Count Value: {count}</span>

            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;