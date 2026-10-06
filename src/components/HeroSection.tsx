import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, ChevronRight, Zap, Sparkles } from 'lucide-react';
import heroRoadImg from '../assets/images/aliar_hero_road_1790276822639.jpg';

interface HeroSectionProps {
  onStartQuote: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartQuote,
  onOpenEmergency,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Copywriting */}
          <div className="lg:col-span-7 space-y-6">
            {/* Context metadata: clean unboxed typography without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wide">
              <span>Proteção Patrimonial Mutualista</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300">Sem análise de perfil ou SPC</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-blue-400">100% Tabela FIPE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Proteja seu veículo com quem está sempre ao seu lado.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              A <strong>Aliar</strong> oferece proteção completa contra colisão, roubo, furto, terceiros e desastres naturais, com assistência 24 horas em todo o território nacional e preço justo pelo sistema mutualista.
            </p>

            {/* Quick Proof Metrics adjacent to claim */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-800 py-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Tabela FIPE oficial</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums tracking-tight">
                  24h
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Socorro em todo Brasil</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                  0%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Burocracia / SPC</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onStartQuote}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Simular Mensalidade Agora</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEmergency}
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Central de Socorro 24h</span>
              </button>
            </div>

            {/* Micro reassurance checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Carros, motos e utilitários
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Qualquer condutor habilitado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Sem consulta Serasa/SPC
              </span>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group">
              <img
                src={heroRoadImg}
                alt="Veículos protegidos pela Aliar em rodovia brasileira"
                className="w-full aspect-16/10 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Floating Verified Trust Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Aliar Benefícios Mútuos</div>
                    <div className="text-[11px] text-slate-300">Cobertura Ativa em Todo o Brasil</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1 justify-end">
                    <Sparkles className="w-3 h-3" />
                    Desde 2016
                  </span>
                  <span className="text-[10px] text-slate-400 block">Sede Ipatinga / MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
