import React from 'react';

const Testimonials = () => (
    <section className="section-testimonials section-padding">
        <div className="container">
            <h2 className="section-title text-center animate-on-scroll">O que nossos clientes dizem</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card animate-on-scroll">
                    <div className="stars">★★★★★</div>
                    <p>"Recuperei meu Instagram em menos de 48 horas! O Dr. João Passioni foi extremamente atencioso e resolveu meu problema de bloqueio injusto que já durava semanas. Recomendo muito!"</p>
                    <div className="client">
                        <strong>Marina Silva</strong>
                        <span>Influenciadora Digital</span>
                    </div>
                </div>
                <div className="testimonial-card animate-on-scroll">
                    <div className="stars">★★★★★</div>
                    <p>"Minha empresa depende do WhatsApp Business para vendas. Quando fomos banidos, o prejuízo começou a subir. A equipe da Passioni Advocacia agiu rápido com uma liminar e voltamos a operar no dia seguinte."</p>
                    <div className="client">
                        <strong>Ricardo Santos</strong>
                        <span>Empresário</span>
                    </div>
                </div>
                <div className="testimonial-card animate-on-scroll">
                    <div className="stars">★★★★★</div>
                    <p>"Achei que tinha perdido minha conta do Facebook para sempre após um hack. O João Passioni não só recuperou a conta como garantiu que a plataforma reforçasse a segurança. Profissionalismo impecável."</p>
                    <div className="client">
                        <strong>Beatriz Lima</strong>
                        <span>Criadora de Conteúdo</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;
