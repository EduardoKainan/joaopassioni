import React, { useEffect, useState, Suspense, lazy } from 'react';
import '../App.css';

const Problem = lazy(() => import('./Problem'));
const Solution = lazy(() => import('./Solution'));
const Stats = lazy(() => import('./Stats'));
const About = lazy(() => import('./About'));
const Steps = lazy(() => import('./Steps'));
const Testimonials = lazy(() => import('./Testimonials'));
const Footer = lazy(() => import('./Footer'));
const FAQ = lazy(() => import('./FAQ'));
import QualificationModal from './QualificationModal';const LandingPageTemplate = ({ title, subtitle, badge }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "5519992345874";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20meu%20WhatsApp%20Business%20foi%20bloqueado%20e%20preciso%20de%20ajuda%20jurídica%20urgente.%20Gostaria%20de%20uma%20análise%20do%20meu%20caso.`;

  const openModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const observeNewElements = () => {
      document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
        intersectionObserver.observe(el);
      });
    };

    // Initial check
    observeNewElements();

    // Watch for lazy-loaded sections being added to the DOM
    const mutationObserver = new MutationObserver((mutations) => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const loadVideo = () => {
    setIsVideoLoaded(true);
    // Load Wistia scripts dynamically
    if (!document.getElementById('wistia-player-script')) {
      const script1 = document.createElement('script');
      script1.id = 'wistia-player-script';
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'wistia-embed-script';
      script2.src = "https://fast.wistia.com/embed/o6ksv33dc4.js";
      script2.async = true;
      script2.type = "module";
      document.body.appendChild(script2);
    }
  };

  const defaultTitle = "WhatsApp Business Banido ou Bloqueado?";
  const defaultSubtitle = "Sua conta WhatsApp Business foi banida, suspensa, hackeada ou desativada? Somos referência no Brasil em Recuperação de Contas Digitais — atuamos com urgência para devolver o seu negócio.";
  const defaultBadge = "REFERÊNCIA EM RECUPERAÇÃO DE CONTAS DIGITAIS";

  return (
    <div className="lp-wrapper">
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img
              src="/logo.webp"
              alt="Passioni Advocacia Logo"
              className="logo-img"
              width="330"
              height="105"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <a href="#" onClick={openModal} className="btn-nav">WhatsApp</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-on-scroll">
          <div className="badge-expert">{badge || defaultBadge}</div>
          <h1>{title || defaultTitle}</h1>

          <div className="hero-video">
            <div className="wistia_responsive_padding">
              <div className="wistia_responsive_wrapper">
                {!isVideoLoaded ? (
                  <div className="video-placeholder" onClick={loadVideo} style={{ cursor: 'pointer', position: 'relative' }}>
                    <img
                      src="https://fast.wistia.com/embed/medias/o6ksv33dc4/swatch"
                      alt="Vídeo Thumbnail"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      width="350"
                      height="622"
                    />
                    <div className="play-button-overlay">
                      <div className="play-icon">▶</div>
                    </div>
                  </div>
                ) : (
                  <wistia-player media-id="o6ksv33dc4" aspect="0.5625"></wistia-player>
                )}
              </div>
            </div>
          </div>

          <p className="subheadline">
            {subtitle || defaultSubtitle}
          </p>
          <button onClick={openModal} className="btn btn-primary cta-hero">
            Falar com advogado agora
          </button>
          <div className="hero-trust">
            <span>✓ Recuperação em até 48h</span>
            <span>✓ Indenização de até R$10.000</span>
            <span>✓ 100% Online em todo o Brasil</span>
          </div>
        </div>
      </header>

      {/* Trust Ticker */}
      <div className="trust-ticker">
        <div className="trust-ticker-track">
          {[
            "Atendimento humanizado",
            "Agilidade e Transparência durante todo o processo",
            "Suporte Online",
            "Advogado Especialista",
            "Recuperação em até 48h",
            "Indenização de até R$10.000",
            "Atendimento humanizado",
            "Agilidade e Transparência durante todo o processo",
            "Suporte Online",
            "Advogado Especialista",
            "Recuperação em até 48h",
            "Indenização de até R$10.000",
          ].map((item, i) => (
            <span key={i} className="trust-ticker-item">✦ {item}</span>
          ))}
        </div>
      </div>

      <Suspense fallback={<div className="section-loading">Carregando...</div>}>
        <Problem />
        <Solution onCtaClick={openModal} />
        <Stats />
        <About />
        <Steps />
        <Testimonials />
        <FAQ onCtaClick={openModal} />

        {/* CTA Final */}
        <section className="section-cta-final section-padding bg-gradient animate-on-scroll">
          <div className="container text-center">
            <h2 className="section-title">Não perca mais um dia de faturamento por causa de um bloqueio injusto.</h2>
            <p className="lead">Enquanto sua conta está bloqueada, você está perdendo vendas, clientes e dinheiro. Fale agora com quem pode reverter isso pela Justiça — e ainda garantir uma indenização de até R$10.000.</p>
            <button onClick={openModal} className="btn btn-primary btn-large">Falar com advogado agora</button>
          </div>
        </section>

        <Footer />
      </Suspense>

      <QualificationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        whatsappNumber={whatsappNumber} 
      />
    </div>
  );
};

export default LandingPageTemplate;
