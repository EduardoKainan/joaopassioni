import React, { useState } from 'react';
import './QualificationModal.css';

const QualificationModal = ({ isOpen, onClose, whatsappNumber }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    tipoPessoa: '',
    usoWa: '',
    tempoBanimento: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isStep1Valid = () => {
    return formData.nome.trim() !== '' && formData.whatsapp.trim() !== '';
  };

  const isStep2Valid = () => {
    return formData.tipoPessoa !== '' && formData.usoWa !== '' && formData.tempoBanimento !== '';
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (isStep1Valid()) setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isStep2Valid()) {
      alert('Por favor, responda todas as perguntas.');
      return;
    }

    setIsSubmitting(true);

    const isDisqualified = formData.tipoPessoa === 'PF' && formData.usoWa === 'Particular';

    const dataToSend = {
      ...formData,
      statusLead: isDisqualified ? 'DESQUALIFICADO' : 'QUALIFICADO'
    };

    try {
      await fetch('https://n8nback.zapgestao.app.br/webhook/lead-lp-advogado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }

    setIsSubmitting(false);

    if (isDisqualified) {
      setStep(3); // Tela de desqualificação
    } else {
      // Montar link dinâmico com os dados
      const tipoLabel = formData.tipoPessoa === 'PF' ? 'Pessoa Física' : 'Pessoa Jurídica';
      const textMsg = `Olá, meu WhatsApp Business foi bloqueado e preciso de ajuda jurídica urgente.\n\n*Meus Dados:*\nNome: ${formData.nome}\nTipo: ${tipoLabel}\nUso do Whats: ${formData.usoWa}\nBanido há: ${formData.tempoBanimento}`;
      const finalLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMsg)}`;
      
      window.open(finalLink, '_blank');
      onClose();
      // Reseta
      setFormData({ nome: '', whatsapp: '', tipoPessoa: '', usoWa: '', tempoBanimento: '' });
      setStep(1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-modal">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">&times;</button>

        {step === 1 && (
          <>
            <div className="modal-header">
              <h2>Análise de Viabilidade</h2>
              <p>Etapa 1 de 2: Seus dados de contato.</p>
            </div>
            <form className="qualification-form" onSubmit={handleNextStep}>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp">Seu WhatsApp</label>
                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" required />
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={!isStep1Valid()}>
                Avançar &rarr;
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <div className="modal-header">
              <h2>Análise de Viabilidade</h2>
              <p>Etapa 2 de 2: Sobre o seu WhatsApp.</p>
            </div>
            <form className="qualification-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="group-label">Você é pessoa física ou jurídica?</label>
                <div className="radio-group">
                  <label className={`radio-label ${formData.tipoPessoa === 'PF' ? 'selected' : ''}`}>
                    <input type="radio" name="tipoPessoa" value="PF" onChange={handleChange} />
                    Pessoa Física (CPF)
                  </label>
                  <label className={`radio-label ${formData.tipoPessoa === 'PJ' ? 'selected' : ''}`}>
                    <input type="radio" name="tipoPessoa" value="PJ" onChange={handleChange} />
                    Pessoa Jurídica (CNPJ)
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="group-label">Utiliza o WhatsApp para o trabalho ou apenas particular?</label>
                <div className="radio-group">
                  <label className={`radio-label ${formData.usoWa === 'Trabalho' ? 'selected' : ''}`}>
                    <input type="radio" name="usoWa" value="Trabalho" onChange={handleChange} />
                    Trabalho / Vendas
                  </label>
                  <label className={`radio-label ${formData.usoWa === 'Particular' ? 'selected' : ''}`}>
                    <input type="radio" name="usoWa" value="Particular" onChange={handleChange} />
                    Apenas Particular
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="group-label">O banimento ocorreu há quanto tempo?</label>
                <div className="radio-group stack">
                  <label className={`radio-label ${formData.tempoBanimento === 'Menos de 30 dias' ? 'selected' : ''}`}>
                    <input type="radio" name="tempoBanimento" value="Menos de 30 dias" onChange={handleChange} />
                    Menos de 30 dias
                  </label>
                  <label className={`radio-label ${formData.tempoBanimento === '1 a 3 meses' ? 'selected' : ''}`}>
                    <input type="radio" name="tempoBanimento" value="1 a 3 meses" onChange={handleChange} />
                    Entre 1 e 3 meses
                  </label>
                  <label className={`radio-label ${formData.tempoBanimento === 'Mais de 3 meses' ? 'selected' : ''}`}>
                    <input type="radio" name="tempoBanimento" value="Mais de 3 meses" onChange={handleChange} />
                    Mais de 3 meses
                  </label>
                </div>
              </div>
              <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <button type="button" className="btn btn-submit" style={{backgroundColor: '#e5e7eb', color: '#374151', flex: '0.4'}} onClick={handleBack}>
                  Voltar
                </button>
                <button type="submit" className={`btn btn-primary btn-submit ${isSubmitting ? 'loading' : ''}`} style={{flex: '1'}} disabled={isSubmitting || !isStep2Valid()}>
                  {isSubmitting ? 'Enviando...' : 'Analisar Meu Caso'}
                </button>
              </div>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="modal-disqualified">
            <div className="disqualified-icon">ℹ️</div>
            <h2>Agradecemos seu contato</h2>
            <p>No momento, nossa equipe jurídica está focada no atendimento de empresas (PJ) e contas que utilizam o WhatsApp exclusivamente para fins comerciais ou de trabalho.</p>
            <p>Registramos seus dados e, caso o nosso perfil de atendimento seja ampliado, entraremos em contato com você.</p>
            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '20px' }}>
              Fechar e voltar ao site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QualificationModal;
