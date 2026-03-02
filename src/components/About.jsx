import React from 'react';

const About = () => (
    <section className="section-about section-padding">
        <div className="container about-content">
            <div className="about-image animate-on-scroll">
                <img
                    src="/joao-passioni.webp"
                    alt="Dr. João Passioni"
                    className="profile-photo"
                    loading="lazy"
                    width="650"
                    height="650"
                />
            </div>
            <div className="about-text-wrapper">
                <div className="about-text animate-on-scroll">
                    <h2 className="section-title">Passioni Advocacia</h2>
                    <p className="lead">Especialistas em Direitos Digitais e Defesa do Consumidor em Redes Sociais.</p>
                    <p>Com uma atuação estratégica e moderna, o escritório de <strong>João Passioni</strong> se destaca pela agilidade no combate às injustiças cometidas pelas grandes plataformas como Meta (Instagram/Facebook) e WhatsApp.</p>
                    <p>Entendemos que hoje as redes sociais são ferramentas de trabalho e sobrevivência, por isso nossa prioridade é a rapidez na solução do seu caso.</p>
                </div>
                <div className="about-features animate-on-scroll">
                    <div className="feature">
                        <strong>Autoridade</strong>
                        <p>Referência em direito digital e recuperação de ativos digitais.</p>
                    </div>
                    <div className="feature">
                        <strong>Segurança</strong>
                        <p>Processos transparentes e acompanhamento direto.</p>
                    </div>
                    <div className="feature">
                        <strong>Agilidade</strong>
                        <p>Protocolos rápidos para casos de urgência máxima.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
