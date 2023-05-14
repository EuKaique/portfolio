import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import "../styles/components/informationcontainer.sass";


const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Celular</h3>
                    <p>(11)95242-2368</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>kaiqueols75@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="map-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>São Paulo - SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer