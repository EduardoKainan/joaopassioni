import React from 'react';

const Stats = () => (
    <section className="section-stats bg-gradient">
        <div className="container stats-grid">
            <div className="stat-item animate-on-scroll">
                <span className="stat-number">+5.000</span>
                <span className="stat-label">Clientes Atendidos</span>
            </div>
            <div className="stat-item animate-on-scroll">
                <span className="stat-number">+15</span>
                <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-item animate-on-scroll">
                <span className="stat-number">100%</span>
                <span className="stat-label">Online em Todo Brasil</span>
            </div>
        </div>
    </section>
);

export default Stats;
