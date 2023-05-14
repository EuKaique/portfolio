import Foto from '../img/eu.png';
import Curriculo from '../pdf/Profile.pdf';

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Foto} alt="Kaique Oliveira Santos" />
            <p className='title'>Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="curriculo" download={Curriculo} className='btn'>Baixar currículo</a>
        </aside>
    )
}

export default Sidebar