import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";

const MainContent = () => {
    return (
        <menu id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </menu>
    )
}

export default MainContent