// PROTÓTIPO: dados fictícios. Não publicar sem backend autenticado (LGPD).
import React, { useState } from 'react';
import { Car, Bike, Truck, Check, AlertCircle, Send, Calculator, HelpCircle } from 'lucide-react';
import { PLANS, VehiclePlan, WHATSAPP_NUMBER } from '../data/aliarData';

type VehicleCategory = 'passeio' | 'suv' | 'moto' | 'app';

interface CategoryOption {
  id: VehicleCategory;
  name: string;
  icon: typeof Car;
  desc: string;
  defaultFipe: number;
}

const CATEGORIES: CategoryOption[] = [
  { id: 'passeio', name: 'Carro de Passeio', icon: Car, desc: 'Hatchs, sedans e compactos', defaultFipe: 55000 },
  { id: 'suv', name: 'SUV ou Picape', icon: Truck, desc: 'Caminhonetes e utilitários', defaultFipe: 110000 },
  { id: 'moto', name: 'Motocicleta', icon: Bike, desc: 'Motos de 100cc a 1000cc+', defaultFipe: 22000 },
  { id: 'app', name: 'App / Comercial', icon: Car, desc: 'Uber, 99, táxi e frotas leves', defaultFipe: 65000 },
];

export const QuoteSimulator: React.FC = () => {
  const [category, setCategory] = useState<VehicleCategory>('passeio');
  const [fipeValue, setFipeValue] = useState<number>(55000);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('completo');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientCity, setClientCity] = useState<string>('Ipatinga - MG');
  const [includeGlass, setIncludeGlass] = useState<boolean>(true);
  const [extraLoanerCar, setExtraLoanerCar] = useState<boolean>(false);
  const [submittedProposal, setSubmittedProposal] = useState<boolean>(false);

  const currentCategory = CATEGORIES.find((c) => c.id === category)!;
  const currentPlan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[1];

  // Calculation formula based on standard mutualist rateio
  const calculatePlanPrice = (plan: VehiclePlan) => {
    let categoryFactor = 1.0;
    if (category === 'suv') categoryFactor = 1.15;
    if (category === 'moto') categoryFactor = 0.85;
    if (category === 'app') categoryFactor = 1.2;

    const base = plan.baseMonthly;
    const fipeRate = fipeValue * plan.fipeMultiplier;
    let total = (base + fipeRate) * categoryFactor;

    if (includeGlass && !plan.glassCoverage) total += 18;
    if (extraLoanerCar) total += 22;

    return Math.max(59.9, Math.round(total * 10) / 10);
  };

  const currentEstimatedPrice = calculatePlanPrice(currentPlan);

  const handleCategoryChange = (newCat: VehicleCategory) => {
    setCategory(newCat);
    const catObj = CATEGORIES.find((c) => c.id === newCat);
    if (catObj) {
      setFipeValue(catObj.defaultFipe);
    }
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedProposal(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Aliar Proteção Veicular! Gostaria de formalizar minha cotação:\n` +
      `• Veículo: ${currentCategory.name} (FIPE: R$ ${fipeValue.toLocaleString('pt-BR')})\n` +
      `• Plano Escolhido: ${currentPlan.name} (~R$ ${currentEstimatedPrice.toFixed(2)}/mês)\n` +
      `• Nome: ${clientName || 'Interessado'}\n` +
      `• Cidade: ${clientCity}`
    );
    // WhatsApp direct link using Aliar typical format
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Transparência & Economia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Simulador de Proteção Mutualista Aliar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descubra quanto você economiza em comparação ao seguro tradicional. Sem análise de perfil do motorista e sem consulta ao SPC/Serasa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
            {/* Step 1: Vehicle Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Tipo de Veículo
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const active = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        active
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-600/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-1.5 ${active ? 'text-blue-700' : 'text-slate-500'}`} />
                      <span className="text-xs font-semibold whitespace-nowrap">{cat.name}</span>
                      <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{cat.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: FIPE Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Valor Estimado do Veículo (Tabela FIPE)
                </label>
                <div className="text-lg font-bold text-blue-700 tabular-nums">
                  R$ {fipeValue.toLocaleString('pt-BR')}
                </div>
              </div>

              <input
                type="range"
                min="10000"
                max="250000"
                step="5000"
                value={fipeValue}
                onChange={(e) => setFipeValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              {/* Presets */}
              <div className="flex items-center justify-between gap-2 mt-3 pt-1">
                {[25000, 45000, 75000, 110000, 160000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFipeValue(preset)}
                    className={`text-[11px] py-1 px-2 rounded-md font-medium transition-colors cursor-pointer ${
                      fipeValue === preset
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    R$ {(preset / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Choose Plan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                3. Selecione o Nível de Cobertura
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PLANS.map((plan) => {
                  const active = selectedPlanId === plan.id;
                  const price = calculatePlanPrice(plan);
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-4 rounded-xl border text-left transition-all relative cursor-pointer ${
                        active
                          ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {plan.badge && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full shadow-xs">
                          {plan.badge}
                        </span>
                      )}
                      <div className="text-sm font-bold text-slate-900">{plan.name}</div>
                      <div className="mt-2 text-xl font-extrabold text-blue-700 tabular-nums">
                        R$ {price.toFixed(2)}
                        <span className="text-xs font-normal text-slate-500">/mês</span>
                      </div>
                      <div className="mt-2 text-[11px] text-slate-500 space-y-1">
                        <div>Reboque: <strong>{plan.towDistanceKm}km</strong></div>
                        <div>Terceiros: <strong>R$ {(plan.thirdPartyCover / 1000).toFixed(0)}k</strong></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                Benefícios Opcionais
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeGlass}
                    onChange={(e) => setIncludeGlass(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">Proteção de Vidros e Faróis</div>
                    <div className="text-slate-500 text-[11px]">Parabrisa, lanternas e retrovisores</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={extraLoanerCar}
                    onChange={(e) => setExtraLoanerCar(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">Carro Reserva Estendido</div>
                    <div className="text-slate-500 text-[11px]">+7 dias adicionais em caso de sinistro</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Proposal Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Resumo da Simulação
                </div>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  {currentPlan.name}
                </h3>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
            </div>

            {/* Price Highlight */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60">
              <div className="text-xs text-slate-400">Mensalidade Estimada no Mutualismo</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                  R$ {currentEstimatedPrice.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400">/ mês</span>
              </div>
              <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Economia média de até 50% comparado a seguro bancário.
              </p>
            </div>

            {/* Items Included */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="font-semibold text-slate-200">Garantias inclusas no seu plano:</div>
              {currentPlan.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
              {includeGlass && !currentPlan.glassCoverage && (
                <div className="flex items-start gap-2 text-amber-300">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Vidros, Faróis e Retrovisores (Adicional)</span>
                </div>
              )}
              {extraLoanerCar && (
                <div className="flex items-start gap-2 text-amber-300">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>+7 Dias de Carro Reserva Extra</span>
                </div>
              )}
            </div>

            {/* Quick Proposal Action */}
            {!submittedProposal ? (
              <form onSubmit={handleSimulateSubmit} className="space-y-3 pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-300 font-medium">
                  Deseja receber essa proposta oficial no seu WhatsApp?
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp (com DDD)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Sua Cidade (ex: Ipatinga)"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gerar Cotação & Falar com Consultor</span>
                </button>
              </form>
            ) : (
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-4 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Cotação Gerada com Sucesso!</h4>
                <p className="text-xs text-slate-300">
                  Preparamos as condições da <strong>Aliar Proteção Veicular</strong> para {clientName || 'você'}.
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Abrir Proposta no WhatsApp Oficial</span>
                  </button>
                  <button
                    onClick={() => setSubmittedProposal(false)}
                    className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Editar dados da simulação
                  </button>
                </div>
              </div>
            )}

            {/* Quiet disclaimer */}
            <div className="text-[11px] text-slate-400 flex items-start gap-1.5 pt-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>
                Valores estimados com base no rateio mensal e tabela FIPE. Sujeito à vistoria prévia online ou presencial sem custo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
