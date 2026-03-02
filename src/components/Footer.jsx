import React from 'react';

const Footer = () => (
    <footer className="footer section-padding">
        <div className="container footer-content">
            <div className="footer-info">
                <div className="logo logo-small">
                    <img
                        src="/logo.webp"
                        alt="Passioni Advocacia Logo"
                        className="logo-img"
                        loading="lazy"
                        width="165"
                        height="53"
                    />
                </div>
                <p>Passioni Advocacia &copy; 2025 – Todos os direitos reservados</p>
            </div>
            <div className="footer-contact">
                <p><strong>E-mail:</strong> contato@passioniadvocacia.com.br</p>
                <p><strong>WhatsApp:</strong> (19) 99234-5874</p>
            </div>
        </div>
    </footer>
);

export default Footer;
