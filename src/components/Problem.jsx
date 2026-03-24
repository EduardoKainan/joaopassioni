import React from 'react';

const Problem = () => (
    <section className="section-problem section-padding bg-dark">
        <div className="container">
            <div className="text-center animate-on-scroll">
                <h2 className="section-title">Quando o WhatsApp Business trava, o seu negócio para.</h2>
                <p className="section-subtitle">Quem usa o WhatsApp para vender, atender clientes e receber pedidos sabe: um dia offline pode custar muito caro. E a Meta não oferece suporte humano para resolver.</p>
            </div>

            <div className="problem-grid">
                <div className="problem-card animate-on-scroll">
                    <div className="icon">📵</div>
                    <h3>Clientes sem Resposta</h3>
                    <p>Nenhuma mensagem chega, nenhum pedido é feito. Seus clientes vão buscar o concorrente.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">💸</div>
                    <h3>Faturamento Parado</h3>
                    <p>Cada hora com a conta bloqueada é dinheiro que você não vai recuperar. O prejuízo cresce a cada minuto.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">⚠️</div>
                    <h3>Credibilidade em Risco</h3>
                    <p>Clientes que tentam te chamar e não conseguem resposta começam a desconfiar da sua empresa.</p>
                </div>
                <div className="problem-card animate-on-scroll">
                    <div className="icon">🤖</div>
                    <h3>Suporte Inexistente</h3>
                    <p>A Meta só oferece respostas automáticas. Sem intervenção jurídica, a conta pode ficar bloqueada por semanas.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Problem;
