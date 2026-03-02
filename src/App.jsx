import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';

const Problem = lazy(() => import('./components/Problem'));
const Solution = lazy(() => import('./components/Solution'));
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Steps = lazy(() => import('./components/Steps'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const whatsappNumber = "5519992345874";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20uma%20análise%20especializada%20sobre%20o%20bloqueio%20da%20minha%20conta.`;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
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
            />
          </div>
          <a href={whatsappLink} className="btn-nav">WhatsApp</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-on-scroll">
          <div className="badge-expert">ESPECIALISTA EM DIREITO DIGITAL</div>
          <h1>Sua conta do Instagram, Facebook ou WhatsApp foi bloqueada?</h1>

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
            Você pode ter direito ao desbloqueio imediato pela Justiça. Atuação 100% online em todo o Brasil com foco em agilidade e resultados.
          </p>
          <a href={whatsappLink} className="btn btn-primary cta-hero">
            Falar com advogado especialista agora
          </a>
          <div className="hero-trust">
            <span>✓ Atendimento imediato</span>
            <span>✓ Especialista em Redes Sociais</span>
            <span>✓ 100% Online</span>
          </div>
        </div>
      </header>

      <Suspense fallback={<div className="section-loading">Carregando...</div>}>
        <Problem />
        <Solution whatsappLink={whatsappLink} />
        <Stats />
        <About />
        <Steps />
        <Testimonials />

        {/* CTA Final */}
        <section className="section-cta-final section-padding bg-gradient animate-on-scroll">
          <div className="container text-center">
            <h2 className="section-title">Não deixe sua conta (e seu sustento) nas mãos de um robô.</h2>
            <p className="lead">Fale agora com quem entende do assunto e recupere seu acesso imediatamente.</p>
            <a href={whatsappLink} className="btn btn-primary btn-large">Recupere sua conta agora</a>
          </div>
        </section>

        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
