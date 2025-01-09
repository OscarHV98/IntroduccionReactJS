import githubLogo from '../../assets/github.svg';
import githubLogoDos from '../../assets/githubDos.svg';
const Github = () => {
    return (
    <div>
        <a href="https://github.com/OscarHV98/IntroduccionReactJS" target="_blank">
          <img src={githubLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/OscarHV98/IntroduccionReactJS" target="_blank">
          <img src={githubLogoDos} className="logo" alt="Vite logo" />
        </a>
    </div>
    );
};

export default Github;