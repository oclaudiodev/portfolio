import { Link } from 'react-router'
import './inicio.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaSass, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

export default function Inicio() {

    return (
        <div className="inicio">
            <section className="apresentacao">
                <div className="texto">
                    <h1> Olá, eu sou <span>Cláudio</span></h1>
                    <h2>Desenvolvedor Full Stack</h2>
                    <p>
                        Transformo ideias em soluções completas. Desenvolvo aplicações do front ao back-end, unindo design intuitivo e arquitetura robusta. Utilizo tecnologias como <strong>React</strong>, <strong>Node.js Express</strong>, <strong>MySQL </strong> e <strong>SCSS</strong>, sempre com foco em performance, escalabilidade e experiência do usuário.
                    </p>

                    <section className="habilidades">
                        <h2 className="neon">Tecnologias que Utilizo</h2>

                        <div className="icons">
                            <div className="item html"><FaHtml5 /> HTML</div>
                            <div className="item css"><FaCss3Alt /> CSS</div>
                            <div className="item js"><SiJavascript /> JavaScript</div>
                            <div className="item react"><FaReact /> React</div>
                            <div className="item node"><FaNodeJs /> Node.js</div>
                            <div className="item mysql"><SiMysql /> MySQL</div>
                            <div className="item scss"><FaSass /> SCSS</div>
                            <div className="item git"><FaGitAlt /> Git</div>
                            <div className="item github"><FaGithub /> GitHub</div>
                        </div>

                    </section>


                    <div className="botoes">
                        <Link to="/projetos" className="btn" onClick={() => window.scrollTo(0, 0)}>
                            🚀 Ver Projetos
                        </Link>
                        <a
                            href="https://wa.me/5511951008673?text=Olá%2C+vi+seu+portfólio+e+gostaria+de+conversar!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secundario"
                        >
                            Contato
                        </a>
                    </div>
                </div>
                <div className='ajuste'>
                    <div className="imagem">
                        <img src='/claudio.jpg' />
                    </div>
                </div>

            </section>

            <section id="projetos" className="projetos">
                <h2> Projetos em Destaque</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Sistema de Login e Registrar</h3>
                        <p>Sistema desenvolvido para administrar, monitorar e organizar os registros de usuários no site, permitindo o controle preciso do número de pessoas cadastradas.</p>
                    </div>
                    <div className="card">
                        <h3>Sistema To Do List</h3>
                        <p>Sistema desenvolvido para organizar tarefas, possibilitando a criação, atualização e remoção de atividades após sua conclusão.</p>
                    </div>
                    <div className="card">
                        <h3>Conectando Gerações (TCC T.I)</h3>
                        <p>Website completo desenvolvido como Trabalho de Conclusão de Curso em T.I., utilizando React, Node.js e MySQL. O projeto tem como objetivo conectar diferentes gerações por meio de uma plataforma interativa e acessível.</p>
                    </div>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2> Entre em Contato</h2>
                <p>Vamos conversar sobre oportunidades e novos projetos!</p>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=7claudiosouza@gmail.com&su=Contato%20via%20Portfólio&body=Olá%20Cláudio%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                >
                    Enviar E-mail
                </a>
            </section>
        </div>
    )
}
