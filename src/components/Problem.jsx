import React from 'react';

const Problem = () => (
    <section className="section-problem section-padding bg-dark">
        <div className="container">
            <div className="text-center animate-on-scroll">
                <h2 className="section-title">O bloqueio injusto não é apenas um erro, é um prejuízo.</h2>
                <p className="section-subtitle">Milhares de usuários e empresas sofrem suspensões arbitrárias diariamente, sem nenhum suporte humano das plataformas.</p>
            </div>

            <div className="problem-grid">
                <div className="problem-card animate-on-scroll">
                    <div className="icon">📉</div>
                    <h3>Perda de Vendas</h3>
                    <p>Cada hora offline é um faturamento que não volta mais para o seu negócio.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">💸</div>
                    <h3>Prejuízo Financeiro</h3>
                    <p>Investimentos em anúncios (Ads) desperdiçados e perda de conexões vitais.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">⚠️</div>
                    <h3>Danos à Imagem</h3>
                    <p>A suspensão pode passar a impressão de irregularidade para seus clientes e seguidores.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">👤</div>
                    <h3>Falta de Suporte</h3>
                    <p>As plataformas respondem com robôs. Você precisa de uma intervenção jurídica real.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Problem;
