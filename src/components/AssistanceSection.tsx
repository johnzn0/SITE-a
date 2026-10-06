import React from 'react';
import { Truck, Key, Wrench, Fuel, BatteryCharging, Hotel, PhoneCall, ShieldAlert } from 'lucide-react';
import towAssistImg from '../assets/images/aliar_tow_assist_1790276833701.jpg';

interface AssistanceSectionProps {
  onOpenEmergency: () => void;
}

export const AssistanceSection: React.FC<AssistanceSectionProps> = ({ onOpenEmergency }) => {
  const services = [
    {
      icon: Truck,
      title: 'Reboque / Guincho 24h',
      desc: 'Até 1.000 km de raio em viagens ou retorno ao município de domicílio sem custo adicional.',
    },
    {
      icon: BatteryCharging,
      title: 'Auxílio Elétrico / Partida',
      desc: 'Carga de bateria e diagnóstico rápido para você não ficar parado na garagem ou na rua.',
    },
    {
      icon: Wrench,
      title: 'Troca de Pneus',
      desc: 'Envio de profissional capacitado para substituição do pneu furado pelo estepe com segurança.',
    },
    {
      icon: Key,
      title: 'Chaveiro Automotivo',
      desc: 'Abertura rápida em caso de perda, roubo, quebra ou esquecimento da chave dentro do carro.',
    },
    {
      icon: Fuel,
      title: 'Pane Seca / Combustível',
      desc: 'Reboque até o posto de combustível mais próximo caso falte gasolina, etanol ou diesel.',
    },
    {
      icon: Hotel,
      title: 'Hospedagem & Retorno',
      desc: 'Diárias de hotel ou transporte de retorno caso o evento ocorra longe da sua cidade base.',
    },
  ];

  return (
    <section id="assistencia" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-12 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Asset & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <img
                src={towAssistImg}
                alt="Assistência 24h e Reboque da Aliar Proteção Veicular"
                className="w-full aspect-4/3 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-400">Atendimento 365 Dias por Ano</div>
                  <div className="text-sm font-semibold text-white">Central 0800 & WhatsApp 24h</div>
                </div>
                <button
                  onClick={onOpenEmergency}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Acionar Agora
                </button>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Linha de Emergência Gratuita</div>
                  <div className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                    0800 591 0000
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenEmergency}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Abrir Chamado
              </button>
            </div>
          </div>

          {/* Service grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Socorro Rápido em Qualquer Estrada
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Assistência 24 Horas com cobertura nacional completa.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Um pneu furado, bateria descarregada ou pane na estrada não podem estragar seu dia. A Aliar conta com a maior rede integrada de guinchos e socorristas credenciados em todo o Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{srv.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-11">
                      {srv.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEmergency}
                className="px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Simulador de Acionamento Emergencial</span>
              </button>
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Tempo médio de despacho: <strong>35 a 45 minutos</strong> nas principais capitais e regiões metropolitanas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
