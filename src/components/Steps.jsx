import React from 'react';

const Steps = () => (
    <section className="section-steps section-padding bg-dark">
        <div className="container">
            <div className="text-center animate-on-scroll">
                <h2 className="section-title">Como agimos para reativar sua conta</h2>
                <p className="section-subtitle">Processo rápido, online e totalmente transparente. Seu negócio voltará a funcionar o quanto antes.</p>
            </div>
            <div className="steps-container">
                <div className="step-card animate-on-scroll">
                    <div className="step-num">01</div>
                    <h3>Você nos chama no WhatsApp</h3>
                    <p>Conta o que aconteceu com sua conta do WhatsApp Business. Atendimento imediato pela nossa equipe.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">02</div>
                    <h3>Análise Jurídica Gratuita</h3>
                    <p>Avaliamos o seu caso, identificamos a violação e verificamos as chances reais de reativação pela Justiça.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">03</div>
                    <h3>Ação Judicial de Urgência</h3>
                    <p>Entramos com medida liminar para obrigar a Meta a reativar sua conta o mais rápido possível.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">04</div>
                    <h3>Conta Reativada</h3>
                    <p>Você recebe atualizações constantes e, em muitos casos, sua conta é reativada em poucas horas.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Steps;
