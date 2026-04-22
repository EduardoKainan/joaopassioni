import React, { useState } from 'react';

const faqs = [
    {
        question: "Quanto tempo leva para recuperar minha conta?",
        answer: "Depende da gravidade do seu caso. Na maioria das situações, conseguimos a reativação entre 24h e 48 horas. Em casos mais complexos, o prazo pode chegar a 15 dias."
    },
    {
        question: "Posso realmente receber uma indenização?",
        answer: "Sim. Dependendo do seu caso, você pode ter direito a uma indenização de até R$10.000,00 pelos danos materiais e morais causados pelo bloqueio indevido."
    },
    {
        question: "Como funciona o processo de recuperação?",
        answer: "Você entra em contato, nossa equipe analisa o seu caso e iniciamos o processo de recuperação imediatamente. Tudo é feito de forma online, com acompanhamento transparente em cada etapa."
    },
    {
        question: "Como faço para entrar em contato?",
        answer: "Clique no botão abaixo para falar com nosso especialista via WhatsApp. Respondemos em instantes e começamos a análise do seu caso na mesma hora."
    },
];

const FAQ = ({ onCtaClick }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="section-faq section-padding bg-dark animate-on-scroll">
            <div className="container">
                <div className="text-center animate-on-scroll">
                    <h2 className="section-title">Perguntas Frequentes</h2>
                    <p className="section-subtitle">Para mais informações ou dúvidas, entre em contato conosco.</p>
                </div>
                <div className="faq-list animate-on-scroll">
                    {faqs.map((faq, i) => (
                        <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                {faq.question}
                                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
                            </button>
                            {openIndex === i && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <button onClick={onCtaClick} className="btn btn-primary">Falar com advogado agora</button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
