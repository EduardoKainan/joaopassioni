import React from 'react';

const Steps = () => (
    <section className="section-steps section-padding bg-dark">
        <div className="container">
            <div className="text-center animate-on-scroll">
                <h2 className="section-title">Como funciona nosso atendimento</h2>
                <p className="section-subtitle">Simples, direto e eficiente. Veja o passo a passo para recuperar sua conta.</p>
            </div>
            <div className="steps-container">
                <div className="step-card animate-on-scroll">
                    <div className="step-num">01</div>
                    <h3>Contato via WhatsApp</h3>
                    <p>Você explica seu caso brevemente para nossa equipe especializada.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">02</div>
                    <h3>Análise do Caso</h3>
                    <p>Analisamos a viabilidade jurídica e as chances de sucesso do desbloqueio.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">03</div>
                    <h3>Ação Judicial Rápida</h3>
                    <p>Entramos com as medidas necessárias para buscar a reativação da conta.</p>
                </div>
                <div className="step-card animate-on-scroll">
                    <div className="step-num">04</div>
                    <h3>Acompanhamento</h3>
                    <p>Você recebe atualizações constantes com total transparência.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Steps;
