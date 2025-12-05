import './projetos.scss'

export default function Projetos() {
    return (
        <div className='projetos-page'>
            <h1>Projetos</h1>
            <h2>TCC(Conectando Gerações)</h2>
            <div className='card-projeto'>

                <div className='conteudo-principal'>
                    <video src="/tcc.mp4" autoPlay muted loop controls></video>

                    <div className='texto'>
                        <p>
                        Eu e meu grupo desenvolvemos o projeto Conectando Gerações, uma plataforma criada para ajudar idosos a navegar pela internet com mais segurança. O objetivo é prevenir golpes, orientar sobre práticas seguras e oferecer acesso a notícias atualizadas de forma clara e confiável.

                        Além disso, a plataforma inclui uma área de cursos educativos especialmente pensados para o público idoso, ajudando-os a ganhar autonomia no ambiente digital. Também disponibilizamos um espaço de denúncia, onde o usuário pode relatar casos de golpes ou tentativas de fraude, fortalecendo a proteção e a conscientização dentro da comunidade.

                        O Conectando Gerações foi criado com foco em acessibilidade, inclusão e segurança, buscando tornar a internet um lugar mais seguro para todos.
                        </p>
                        <a href="https://github.com/oclaudiodev/TCC">Projeto no github</a>
                    </div>
                </div>

                <h1>
                    DB+Arquitetura
                </h1>
                <div className='detalhes'>
                    <img src="/bdproj2.1.png" height={400} />
                    <img src="/bdproj2.2.png" height={400} />
                    <img src="/bdproj2.3.png" height={400} />
                    <img src="/bdproj2.4.png" height={100} />
                    <img src="/arqproj2.png" height={400} />
                </div>
        <br />

                <div className="divider"></div>

                <h2>
                    Sistema  login 
                </h2>

                <div className='conteudo-principal'>
                    <video src="/projeto1.mp4" autoPlay muted loop controls></video>

                    <div className='texto'>
                        <p>
                            Desenvolvi um sistema completo de registro e login, integrado a um painel administrativo que permite acompanhar e gerenciar todos os usuários cadastrados. A área de administrador oferece controle total, incluindo a visualização da quantidade de pessoas que acessaram o site, proporcionando uma gestão mais eficiente e segura. O projeto foi construído com foco em desempenho, organização e boas práticas de autenticação.
                        </p>
                        <a href="https://github.com/oclaudiodev/SistemaLogin">Projeto no github</a>
                    </div>
                </div>

                <h1>
                    DB+Arquitetura
                </h1>
                <div className='detalhes'>
                    <img src="/bdproj1.png" height={400} />
                    <img src="/arqproj1.png" height={400} />
                </div>
                <br />

                <div className="divider"></div>

            </div>
        </div>
    )
}
