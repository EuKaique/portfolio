import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiDatabase,
    DiReact,
    DiGit
} from 'react-icons/di'

import { SiPhp, SiDocker } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: 'html', name: 'HTML5', text: 'Conhecimento na maioria das tags, e como montar uma estrutura de forma semântica', icon: <DiHtml5 />},
    { id: 'css', name: 'CSS3', text: 'Conhecimento nas propriedades mais usadas da linguagem, Medias, Flex-box e Grid', icon: <DiCss3 />},
    { id: 'js', name: 'JavaScript', text: 'Conhecimento em DOM, estruturas condicionais, de repetição, Arrays, Objetos e Funções', icon: <DiJsBadge />},
    { id: 'php', name: 'PHP', text: 'Conhecimento em estruturas condicionais, de repetição, Arrays, Objetos, Funções e POO', icon: <SiPhp />},
    { id: 'database', name: 'Banco de dados', text: 'Conhecimento em banco de dados SQL, NoSQL e CRUD', icon: <DiDatabase />},
    { id: 'react', name: 'React.js', text: "Conhecimento em components, useState, useEffect, criação de hooks e consumo de API's", icon: <DiReact />},
    { id: 'git', name: 'Git', text: "Conhecimento nos comandos mais utilizados: pull, push, add, commit, status, origin, checkout, etc.", icon: <DiGit />},
    { id: 'docker', name: 'Docker', text: "Conhecimento nos comandos mais utilizados: up, down, build, reset, start, etc", icon: <SiDocker />},
]

const TechnologiesContainer = () => {
    return (
        <section id="technologies">
            <h2>Tecnologias</h2>
            <div className="technologies-flex">
                {technologies.map((tech) =>(
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>
                                {tech.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
 }

 export default TechnologiesContainer