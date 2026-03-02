import React from 'react';

const Solution = ({ whatsappLink }) => (
    <section className="section-solution section-padding">
        <div className="container solution-container">
            <div className="solution-image animate-on-scroll">
                <div className="glass-card">
                    <h3>Soluções Jurídicas Estratégicas</h3>
                    <ul className="solution-list">
                        <li><span>✦</span> <strong>Reativação Imediata:</strong> Medidas liminares para devolver seu acesso rápido.</li>
                        <li><span>✦</span> <strong>Indenizações:</strong> Solicitação de danos materiais e morais quando cabível.</li>
                        <li><span>✦</span> <strong>Blindagem:</strong> Ações para impedir novas penalidades indevidas no futuro.</li>
                    </ul>
                </div>
            </div>
            <div className="solution-text animate-on-scroll">
                <h2 className="section-title">Recupere o que é seu por direito.</h2>
                <p>Nossa atuação é focada em combater o autoritarismo dos algoritmos e garantir que seus direitos digitais sejam respeitados.</p>
                <a href={whatsappLink} className="btn btn-primary">Quero recuperar minha conta</a>
            </div>
        </div>
    </section>
);

export default Solution;
