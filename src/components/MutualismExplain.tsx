import React from 'react';
import { Users2, Scale, HeartHandshake, FileText, CheckCircle2 } from 'lucide-react';

export const MutualismExplain: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Entenda o Modelo
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Como funciona o Mutualismo na Aliar?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diferente das seguradoras mercantis tradicionais que visam lucros exorbitantes para acionistas e analisam seu CEP ou idade para cobrar valores astronômicos, a <strong>Aliar</strong> é uma associação civil de benefícios mútuos sem fins lucrativos.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              No mutualismo, um grupo de proprietários de veículos se une através de um estatuto formal: todos contribuem mensalmente para um fundo comum que repara colisões, paga indenizações por roubos e mantém a assistência 24h ativa.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Legalidade e Transparência:</strong> Respaldada pela Constituição Federal (Art. 5º, XVII e XVIII) e pelo Código Civil Brasileiro.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Sem Perfil do Condutor:</strong> O veículo está protegido seja conduzido pelo titular, cônjuge, filhos ou motorista habilitado.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Prestação de Contas Aberta:</strong> Relatórios mensais de rateio disponíveis para consulta de todos os associados.
                </span>
              </div>
            </div>
          </div>

          {/* Right Cards: Comparative Table */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold">Aliar Mutualismo vs Seguro Comercial</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Comparativo Direto</span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="grid grid-cols-2 p-3.5 bg-slate-50/70 font-semibold text-slate-500">
                  <div>Aliar Proteção Veicular</div>
                  <div>Seguro Tradicional</div>
                </div>

                <div className="grid grid-cols-2 p-3.5 items-center">
                  <div className="text-blue-900 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Sem consulta SPC / Serasa
                  </div>
                  <div className="text-slate-500">Recusa com restrição no CPF</div>
                </div>

                <div className="grid grid-cols-2 p-3.5 items-center">
                  <div className="text-blue-900 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Qualquer condutor habilitado
                  </div>
                  <div className="text-slate-500">Preço dobra para condutor jovem</div>
                </div>

                <div className="grid grid-cols-2 p-3.5 items-center">
                  <div className="text-blue-900 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Preço justo pelo valor FIPE real
                  </div>
                  <div className="text-slate-500">Margens de lucro de até 300%</div>
                </div>

                <div className="grid grid-cols-2 p-3.5 items-center">
                  <div className="text-blue-900 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Cancelamento sem multas abusivas
                  </div>
                  <div className="text-slate-500">Fidelidade rígida e perda de bônus</div>
                </div>

                <div className="grid grid-cols-2 p-3.5 items-center">
                  <div className="text-blue-900 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Clube de benefícios integrado
                  </div>
                  <div className="text-slate-500">Geralmente sem clube regional</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                <span className="text-[11px] text-slate-500">
                  Mais de 25.000 veículos amparados com segurança e compromisso mútuo.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
