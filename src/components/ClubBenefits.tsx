import React, { useState } from 'react';
import { Tag, Sparkles, Fuel, Pill, Wrench, GraduationCap, Ticket, Check } from 'lucide-react';
import { BENEFIT_PARTNERS } from '../data/aliarData';

export const ClubBenefits: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [litersPerMonth, setLitersPerMonth] = useState<number>(120);
  const [pharmacySpent, setPharmacySpent] = useState<number>(150);

  const categories = ['Todos', 'Combustível', 'Farmácia', 'Manutenção', 'Educação', 'Lazer'];

  const filteredPartners =
    activeCategory === 'Todos'
      ? BENEFIT_PARTNERS
      : BENEFIT_PARTNERS.filter((p) => p.category === activeCategory);

  // Economy calculation
  const fuelSavings = litersPerMonth * 0.25; // R$ 0.25 / L
  const pharmacySavings = pharmacySpent * 0.35; // 35% average
  const totalClubSavings = fuelSavings + pharmacySavings;

  return (
    <section id="clube" className="py-16 sm:py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Vantagens no Dia a Dia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Clube Aliar de Benefícios
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Economize no combustível, na farmácia, na manutenção do seu carro e nos estudos da sua família. Os descontos do clube frequentemente pagam toda a sua mensalidade!
          </p>
        </div>

        {/* Category Tabs (functional filter buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredPartners.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-blue-700 uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    {item.discount}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>Disponível no app Aliar</span>
                <span className="font-semibold text-blue-600">Cupom Direto</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Savings Calculator */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Calculadora de Economia do Associado</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Sua proteção veicular pode sair a custo zero com o Clube Aliar.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ajuste seu consumo mensal comum e veja quanto você economiza apenas utilizando a carteirinha de associado em nossos parceiros conveniados:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs border border-white/10">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Consumo Combustível</span>
                    <strong className="text-amber-400 tabular-nums">{litersPerMonth} L / mês</strong>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="300"
                    step="10"
                    value={litersPerMonth}
                    onChange={(e) => setLitersPerMonth(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer h-1.5"
                  />
                  <div className="text-[10px] text-slate-400 mt-1">Economia: R$ {fuelSavings.toFixed(2)}/mês</div>
                </div>

                <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs border border-white/10">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Gastos Farmácia</span>
                    <strong className="text-emerald-400 tabular-nums">R$ {pharmacySpent} / mês</strong>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={pharmacySpent}
                    onChange={(e) => setPharmacySpent(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer h-1.5"
                  />
                  <div className="text-[10px] text-slate-400 mt-1">Economia: R$ {pharmacySavings.toFixed(2)}/mês</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 text-center space-y-3">
              <div className="text-xs text-slate-300">Economia Total Estimada por Mês</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 tabular-nums tracking-tight">
                R$ {totalClubSavings.toFixed(2)}
              </div>
              <div className="text-xs text-slate-300">
                Mais de <strong>R$ {(totalClubSavings * 12).toFixed(2)}</strong> de economia por ano direto no seu bolso.
              </div>
              <div className="pt-2">
                <span className="text-[11px] text-emerald-300 inline-flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Benefício gratuito incluso em todos os planos Aliar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
