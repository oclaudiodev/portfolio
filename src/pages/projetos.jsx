import './projetos.scss';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router';


export default function Projetos() {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div className="projetos-page">

            <h1 data-aos="fade-down">Projetos</h1>

            
            <section className="card-projeto">

                <h2 data-aos="fade-up">TCC (Conectando Gerações)</h2>

                <div className="conteudo-principal glass" data-aos="fade-up">
                    <video src="/tcc.mp4" controls muted preload="none"></video>

                    <div className="texto">
                        <p>
                            Eu e meu grupo desenvolvemos o projeto Conectando Gerações, uma plataforma criada para ajudar idosos a navegar pela internet com mais segurança. O objetivo é prevenir golpes, orientar sobre práticas seguras e oferecer acesso a notícias atualizadas de forma clara e confiável.
                            <br /><br />
                            Inclui também cursos educativos e uma área de denúncia para fortalecer a proteção da comunidade. Focado totalmente em acessibilidade, inclusão e segurança.
                        </p>
                        <a href="https://github.com/oclaudiodev/TCC">Projeto no Github</a>
                    </div>
                </div>

                <h3>Banco de dados + Arquitetura</h3>
                <div className="detalhes" data-aos="zoom-in">
                    <img src="/bdproj2.1.png" />
                    <img src="/bdproj2.2.png" />
                    <img src="/bdproj2.3.png" />
                    <img src="/bdproj2.4.png" />
                    <img src="/arqproj2.png" />
                </div>

                <div className="divider"></div>

                
                <h2 data-aos="fade-up">Sistema de Login</h2>

                <div className="conteudo-principal glass" data-aos="fade-up">
                    <video src="/projeto1.mp4" controls muted preload="none"></video>

                    <div className="texto">
                        <p>
                            Desenvolvi um sistema completo de autenticação com registro, login e painel administrativo com controle de usuários. O admin pode visualizar quantas pessoas já acessaram o site.
                        </p>
                        <a href="https://github.com/oclaudiodev/SistemaLogin">Projeto no Github</a>
                    </div>
                </div>

                <h3>Banco de dados + Arquitetura</h3>
                <div className="detalhes" data-aos="zoom-in">
                    <img src="/bdproj1.png" />
                    <img src="/arqproj1.png"  />
                </div>

                <div className="divider"></div>

            
                <h2 data-aos="fade-up">Feira de Profissões</h2>

                <div className="conteudo-principal glass" data-aos="fade-up">
                    <video src="/feira.mp4" controls muted preload="none"></video>

                    <div className="texto">
                        <p>
                            Plataforma web desenvolvida para apresentar carreiras de forma moderna e interativa.
                            Backend em Node.js, frontend em React, estilização em SCSS e QR Code único para cada inscrito.
                        </p>
                        <a href="https://github.com/oclaudiodev/feiraDeProfissoes">Projeto no Github</a>
                    </div>
                </div>

                <h3>Banco de dados + Arquitetura</h3>
                <div className="detalhes" data-aos="zoom-in">
                    <img src="/bdproj3.png" />
                    <img src="/bdproj3.1.png" />
                    <img src="/arqproj3.png" />
                </div>

                <div className="divider"></div>

                <h2 data-aos="fade-up">To-Do List</h2>

                <div className="conteudo-principal glass" data-aos="fade-up">
                    <video src="/tasks.mp4" controls muted preload="none"></video>

                    <div className="texto">
                        <p>
                            Aplicação To-Do List desenvolvida com Node.js e React, implementando todas as operações CRUD – criar, editar, listar e excluir tarefas.
                        </p>

                        <p>
                            O foco foi reforçar conceitos como API REST, banco de dados e organização de camadas.
                        </p>

                        <a href="https://github.com/oclaudiodev/tasks">Projeto no Github</a>
                    </div>
                </div>

                <h3>Banco de dados + Arquitetura</h3>
                <div className="detalhes" data-aos="zoom-in">
                    <img src="/bdproj4.png" />
                    <img src="/arqproj4.png" />
                </div>

                <div className="divider"></div>

                <h1 data-aos="fade-up">Novos projetos hão de vir em uma nova atualização…</h1>
                <div className="voltarInicio" data-aos="fade-up">
                    <Link to={"/"}>
                        <button className="botaoVoltar">
                            Voltar
                        </button>
                    </Link>
                </div>
                
            </section>
        </div>
    );
}
