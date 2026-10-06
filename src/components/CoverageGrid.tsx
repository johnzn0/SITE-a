import React from 'react';
import { ShieldAlert, Flame, CloudRain, Users, CarFront, Glasses, Radio, Check } from 'lucide-react';
import telematicsGpsImg from '../assets/images/aliar_telematics_gps_1790276844358.jpg';

export const CoverageGrid: React.FC = () => {
  return (
    <section id="coberturas" className="py-16 sm:py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Coberturas & Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tudo o que seu veículo precisa para rodar protegido 24 horas por dia.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Na Aliar, cada plano é pensado para proteger o patrimônio da sua família ou da sua atividade profissional com agilidade e respaldo mútuo.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 100% FIPE Colisão & Perda Total */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="text-xs text-slate-500 font-medium mb-1">01. Colisão & Perda Total</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% da Tabela FIPE</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reparação em oficinas credenciadas de ponta ou indenização integral de até 100% do valor de mercado em caso de perda total.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Peças genuínas ou originais homologadas</span>
            </div>
          </div>

          {/* Card 2: Roubo & Furto Qualificado */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <CarFront className="w-6 h-6" />
              </div>
              <div className="text-xs text-slate-500 font-medium mb-1">02. Segurança Patrimonial</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Roubo e Furto</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Se o veículo não for localizado pela equipe tática de rastreamento, o associado recebe a indenização integral de forma ágil e segura.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Pronta resposta e central de busca dedicada</span>
            </div>
          </div>

          {/* Card 3: Feature Highlight with Telematics GPS Image */}
          <div className="p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center mb-5 border border-blue-500/30">
                <Radio className="w-6 h-6" />
              </div>
              <div className="text-xs text-amber-400 font-medium mb-1">03. Tecnologia e Rastreamento</div>
              <h3 className="text-xl font-bold text-white mb-2">Rastreador & App 24h</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instalação de tecnologia de telemetria GPS e bloqueio remoto para localizar seu veículo em tempo real diretamente pelo celular.
              </p>
            </div>

            {/* Visual thumbnail */}
            <div className="mt-6 pt-4 border-t border-slate-800 relative z-10">
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-md">
                <img
                  src={telematicsGpsImg}
                  alt="Aplicativo de Rastreamento em tempo real Aliar"
                  className="w-full h-32 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Card 4: Danos a Terceiros */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xs text-slate-500 font-medium mb-1">04. Responsabilidade Civil</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Proteção a Terceiros</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cobertura contra danos materiais provocados involuntariamente a outros veículos em caso de colisão, de R$ 30.000 a R$ 100.000.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Evite prejuízos e discussões jurídicas</span>
            </div>
          </div>

          {/* Card 5: Fenômenos Naturais & Incêndio */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <CloudRain className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium mb-1">05. Clima & Emergências</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Natureza e Incêndio</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cobertura para quedas de árvores, chuvas de granizo, enchentes e alagamentos, além de incêndio decorrente de colisão ou pane.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Tranquilidade em períodos chuvosos</span>
            </div>
          </div>

          {/* Card 6: Vidros, Faróis e Carro Reserva */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Glasses className="w-6 h-6" />
              </div>
              <div className="text-xs text-slate-500 font-medium mb-1">06. Conforto e Continuidade</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vidros & Carro Reserva</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Substituição rápida de para-brisa trincado, vidros laterais e traseiros, faróis e lanternas, mais carro reserva de 7 a 30 dias.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Sua rotina não para enquanto o carro é reparado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
