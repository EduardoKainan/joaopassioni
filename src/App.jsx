import React, { useEffect } from 'react';
import './App.css';

const App = () => {
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

  return (
    <div className="lp-wrapper">
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img src="/logo.png" alt="Passioni Advocacia Logo" className="logo-img" />
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
                <wistia-player media-id="o6ksv33dc4" aspect="0.5625"></wistia-player>
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

      {/* Seção Problema */}
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

      {/* Seção Solução */}
      <section className="section-solution section-padding">
        <div className="container solution-container">
          <div className="solution-image animate-on-scroll">
            <div className="glass-card">
              <h3>Soluções Jurídicas Estratégicas</h3>
              <ul className="solution-list">
                <li><span>✦</span> <strong>Reativação Imediata:</strong> Medidas liminares para devolver seu acesso rápido.</li>
                <li><span>✦</span> <strong>Indenizações:</strong> Solicitação de danos materiais e morais quando cabível.</li>
                <li><span>✦</span> <strong>Blindagem:</strong> Ações para impedir novas penalidades indevidas no futuro.</li>
              </ul>
            </div>
          </div>
          <div className="solution-text animate-on-scroll">
            <h2 className="section-title">Recupere o que é seu por direito.</h2>
            <p>Nossa atuação é focada em combater o autoritarismo dos algoritmos e garantir que seus direitos digitais sejam respeitados.</p>
            <a href={whatsappLink} className="btn btn-primary">Quero recuperar minha conta</a>
          </div>
        </div>
      </section>

      {/* Prova Social */}
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

      <section className="section-about section-padding">
        <div className="container about-content">
          <div className="about-image animate-on-scroll">
            <img src="/joao-passioni.jpg" alt="Dr. João Passioni" className="profile-photo" />
          </div>
          <div className="about-text-wrapper">
            <div className="about-text animate-on-scroll">
              <h2 className="section-title">Passioni Advocacia</h2>
              <p className="lead">Especialistas em Direitos Digitais e Defesa do Consumidor em Redes Sociais.</p>
              <p>Com uma atuação estratégica e moderna, o escritório de <strong>João Passioni</strong> se destaca pela agilidade no combate às injustiças cometidas pelas grandes plataformas como Meta (Instagram/Facebook) e WhatsApp.</p>
              <p>Entendemos que hoje as redes sociais são ferramentas de trabalho e sobrevivência, por isso nossa prioridade é a rapidez na solução do seu caso.</p>
            </div>
            <div className="about-features animate-on-scroll">
              <div className="feature">
                <strong>Autoridade</strong>
                <p>Referência em direito digital e recuperação de ativos digitais.</p>
              </div>
              <div className="feature">
                <strong>Segurança</strong>
                <p>Processos transparentes e acompanhamento direto.</p>
              </div>
              <div className="feature">
                <strong>Agilidade</strong>
                <p>Protocolos rápidos para casos de urgência máxima.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
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

      {/* Depoimentos */}
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

      {/* CTA Final */}
      <section className="section-cta-final section-padding bg-gradient animate-on-scroll">
        <div className="container text-center">
          <h2 className="section-title">Não deixe sua conta (e seu sustento) nas mãos de um robô.</h2>
          <p className="lead">Fale agora com quem entende do assunto e recupere seu acesso imediatamente.</p>
          <a href={whatsappLink} className="btn btn-primary btn-large">Recupere sua conta agora</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-padding">
        <div className="container footer-content">
          <div className="footer-info">
            <div className="logo logo-small">
              <img src="/logo.png" alt="Passioni Advocacia Logo" className="logo-img" />
            </div>
            <p>Passioni Advocacia &copy; 2025 – Todos os direitos reservados</p>
          </div>
          <div className="footer-contact">
            <p><strong>E-mail:</strong> contato@passioniadvocacia.com.br</p>
            <p><strong>WhatsApp:</strong> (19) 99234-5874</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
