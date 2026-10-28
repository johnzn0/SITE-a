import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ShieldCheck, HeartHandshake, Users } from 'lucide-react';
import { AliarOfficialLogo } from './components/AliarOfficialLogo';
import { WHATSAPP_NUMBER } from './data/aliarData';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida.`;

  const faqs = [
    {
      question: 'O que é a Aliar?',
      answer:
        'A Aliar é uma associação de benefícios e proteção mútua, legalmente constituída sem fins lucrativos. Através da união e colaboração mútua entre os associados, garantimos proteção e assistência com mensalidades justas, sem as taxas e burocracias das seguradoras tradicionais.',
    },
    {
      question: 'Qualquer pessoa habilitada pode conduzir o veículo associado?',
      answer:
        'Sim! Na Aliar não existe análise restritiva de perfil do condutor. Desde que a pessoa seja devidamente habilitada perante as leis de trânsito brasileiras, o veículo estará plenamente resguardado.',
    },
    {
      question: 'Existe consulta ao SPC, Serasa ou score de crédito?',
      answer:
        'Não. Na Aliar não realizamos consulta a órgãos de proteção ao crédito. Acreditamos no direito de todos protegerem seu patrimônio com tranquilidade e respeito.',
    },
    {
      question: 'Como funciona a Assistência 24 Horas da Aliar?',
      answer:
        'A assistência 24 horas funciona 365 dias por ano em todo o Brasil. Os associados contam com socorro rápido para reboque (guincho), auxílio para troca de pneus, carga de bateria (auxílio elétrico), chaveiro e socorro emergencial através da nossa central.',
    },
    {
      question: 'Como é calculada a indenização em caso de roubo, furto ou perda total?',
      answer:
        'A indenização é baseada em 100% do valor da Tabela FIPE oficial do veículo vigente na data da ocorrência, conforme estabelecido no regulamento interno da associação.',
    },
    {
      question: 'O que diferencia a Aliar de uma seguradora tradicional?',
      answer:
        'As seguradoras tradicionais são empresas comerciais voltadas ao lucro que cobram de acordo com idade, CEP e perfil individual. A Aliar é uma associação regida pelo mutualismo (Art. 5º da CF/88 e Código Civil): os custos reais são divididos fraternalmente entre os associados, garantindo transparência e economia.',
    },
    {
      question: 'Como faço para me associar ou tirar dúvidas com a Aliar?',
      answer:
        'O atendimento é ágil e direto. Basta clicar no botão de WhatsApp para falar diretamente com a nossa equipe, entender o regulamento e ativar a sua associação.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#10597d]/15 selection:text-[#10597d]">
      
      {/* 1. Header Minimalista */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <AliarOfficialLogo size={60} />
          </a>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#sobre" className="text-slate-600 hover:text-[#10597d] transition-colors">
              Sobre a Aliar
            </a>
            <a href="#duvidas" className="text-slate-600 hover:text-[#10597d] transition-colors">
              Dúvidas
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#10597d] hover:bg-[#0c435e] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-24">
        
        {/* 2. Seção Sobre a Aliar */}
        <section id="sobre" className="space-y-8 scroll-mt-24">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-[#10597d] tracking-tight leading-[1.15]">
              Sobre a Aliar
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A <strong>Aliar</strong> é uma associação fundada com o propósito de unir pessoas em torno de proteção, segurança e cooperação justa, oferecendo amparo verdadeiro, ético e sem os custos abusivos do mercado tradicional.
            </p>
          </div>

          {/* Pilares Essenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10597d]/10 text-[#10597d] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-[#10597d]">Mutualismo Real</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                União de associados que dividem solidariamente eventuais prejuízos entre si, sem fins lucrativos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10597d]/10 text-[#10597d] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-[#10597d]">Inclusão e Respeito</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Acesso transparente para todos, sem análise restritiva de perfil e sem consulta a órgãos de crédito como SPC ou Serasa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10597d]/10 text-[#10597d] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-[#10597d]">Amparo Integral</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Indenização de 100% da Tabela FIPE para roubo, furto, perda total, além de assistência 24 horas em todo o território nacional.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
            <p>
              Atuamos com total respaldo no direito constitucional de livre associação previsto na <strong>Constituição Federal Brasileira (Art. 5º, XVII e XVIII)</strong> e no Código Civil. Nossa missão é manter cada associado amparado com segurança, prontidão e respeito.
            </p>
          </div>
        </section>

        {/* 3. Seção Dúvidas Frequentes */}
        <section id="duvidas" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10597d]">
              Perguntas e Respostas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10597d] tracking-tight">
              Dúvidas Frequentes
            </h2>
            <p className="text-slate-600 text-sm">
              Confira as respostas para as principais dúvidas sobre a Aliar e o funcionamento da associação.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#10597d] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#10597d]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Canal Direto de Dúvidas exclusivo WhatsApp */}
          <div className="p-6 rounded-2xl bg-[#10597d] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h3 className="text-base font-bold">Ainda tem alguma dúvida?</h3>
              <p className="text-xs text-slate-200 mt-0.5">
                Nossa equipe está à disposição no WhatsApp para atender você.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-[#10597d] hover:bg-slate-100 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow-xs shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#10597d]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </section>

      </main>

      {/* 4. Footer Minimalista */}
      <footer className="mt-20 border-t border-slate-100 py-10 bg-white text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <AliarOfficialLogo size={46} />

          <div className="space-y-1">
            <p>Aliar · aliar.org.br</p>
            <p className="text-[11px] text-slate-400">
              Associação · Fundada em 2016
            </p>
          </div>
        </div>
      </footer>

      {/* 5. Botão Flutuante de Contato no Canto Inferior Direito na Cor Padrão (#10597d) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#10597d] hover:bg-[#0c435e] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group border border-white/20"
      >
        <MessageCircle className="w-6 h-6 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Falar no WhatsApp</span>
      </a>

    </div>
  );
}
