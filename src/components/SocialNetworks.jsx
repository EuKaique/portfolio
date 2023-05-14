import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: 'linkedin', url: `https://www.linkedin.com/in/kaique-oliveira-santos-0806a6a3/`, icon: <FaLinkedinIn /> },
    { name: 'github',   url: `https://github.com/EuKaique`, icon: <FaGithub /> },
    { name: 'instagram',url: `https://www.instagram.com/kaique_o_s/`, icon: <FaInstagram /> },
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))

            }
        </section>
    )
}

export default SocialNetworks