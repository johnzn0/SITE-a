import React, { useState } from 'react';
import { ChevronDown, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/aliarData';

export const TestimonialsFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const testimonials = [
    {
      name: 'Marcos Vinícius Andrade',
      city: 'Ipatinga - MG',
      vehicle: 'Toyota Corolla 2021',
      event: 'Colisão com terceiro na rodovia',
      quote:
        'Tive uma colisão e o terceiro não tinha seguro. A Aliar prestou toda assistência de guincho em menos de 40 minutos, cobriu os danos a terceiros sem dor de cabeça e liberou meu carro reserva com rapidez.',
      time: 'Associado há 4 anos',
    },
    {
      name: 'Renata Lacerda Costa',
      city: 'Coronel Fabriciano - MG',
      vehicle: 'Chevrolet Onix Plus 2022',
      event: 'Pane elétrica na serra à noite',
      quote:
        'A assistência 24h foi impecável. Era quase meia-noite em uma estrada sem iluminação, o socorro chegou super rápido com guincho e levou meu carro com segurança. O atendimento humanizado faz toda a diferença.',
      time: 'Associada há 3 anos',
    },
    {
      name: 'Guilherme S. Prado',
      city: 'Belo Horizonte - MG',
      vehicle: 'Renault Duster 2023',
      event: 'Chuva torrencial de granizo',
      quote:
        'Meu carro foi castigado pelo granizo e o teto ficou todo marcado. A Aliar aprovou o martelinho de ouro com oficina credenciada de primeira. Ficou perfeito, como se tivesse saído da concessionária.',
      time: 'Associado há 2 anos',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Testimonials */}
        <div>
          <div className="max-w-3xl space-y-3 mb-10">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Quem confia na Aliar
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A palavra de quem já precisou da nossa proteção.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.city} · {t.vehicle}</div>
                  <div className="text-[11px] font-medium text-blue-700 mt-0.5">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-200/80">
          <div className="text-center space-y-2 mb-10">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Tire Suas Dúvidas
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Perguntas Frequentes sobre a Proteção Veicular
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Tudo o que você precisa saber sobre regulamento, prazos, rateio e assistência.
            </p>
          </div>

          <div className="space-y-3">
            {FREQUENT_QUESTIONS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
