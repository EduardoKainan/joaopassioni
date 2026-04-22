import React from 'react';

const Solution = ({ onCtaClick }) => (
    <section className="section-solution section-padding">
        <div className="container solution-container">
            <div className="solution-image animate-on-scroll">
                <div className="glass-card">
                    <h3>Por que somos referência em Recuperação de Contas</h3>
                    <ul className="solution-list">
                        <li><span>✦</span> <strong>Recuperação Rápida:</strong> Recuperamos sua conta em aproximadamente 48 horas, para que você volte a vender sem preocupações.</li>
                        <li><span>✦</span> <strong>Indenização de até R$10.000:</strong> Você pode ser elegível para receber pelos danos causados pelo bloqueio indevido.</li>
                        <li><span>✦</span> <strong>Segurança Reforçada:</strong> Implementamos medidas jurídicas para evitar que sua conta seja bloqueada novamente.</li>
                        <li><span>✦</span> <strong>Suporte Especializado:</strong> Acompanhamento total durante todo o processo de recuperação, com transparência e humanidade.</li>
                    </ul>
                </div>
            </div>
            <div className="solution-text animate-on-scroll">
                <h2 className="section-title">Somos líderes em Recuperação de Contas do WhatsApp.</h2>
                <p>Conte com uma equipe especializada em direito digital para recuperar sua conta WhatsApp Business. Oferecemos soluções personalizadas e ágeis para devolver o seu acesso e garantir os seus direitos — com atendimento humanizado e resultados reais.</p>
                <button onClick={onCtaClick} className="btn btn-primary">Falar com advogado agora</button>
            </div>
        </div>
    </section>
);

export default Solution;
