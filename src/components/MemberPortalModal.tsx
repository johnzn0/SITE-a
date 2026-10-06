import React, { useState } from 'react';
import { X, UserCheck, QrCode, Copy, Check, FileText, Download, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({ isOpen, onClose }) => {
  const [cpfOrPlate, setCpfOrPlate] = useState('123.456.789-00');
  const [searchDone, setSearchDone] = useState(true);
  const [activeTab, setActiveTab] = useState<'boleto' | 'carteirinha' | 'evento'>('boleto');
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBarcode, setCopiedBarcode] = useState(false);

  if (!isOpen) return null;

  const mockAssociate = {
    name: 'Carlos Eduardo N. Silva',
    plate: 'ALI-2A45',
    vehicle: 'Fiat Pulse Audace 1.0 Turbo 2024',
    plan: 'Plano Completo Mais',
    status: 'Associado Ativo',
    matricula: 'ALI-883921',
    validUntil: '10/2027',
    currentBill: {
      monthRef: 'Setembro / 2026',
      dueDate: '10/10/2026',
      value: 'R$ 138,50',
      barcode: '23793.38128 60032.849102 45000.123849 8 98710000013850',
      pixCode: '00020126580014br.gov.bcb.pix0136aliar-associacao-pix-cobranca@aliar.org.br5204000053039865406138.505802BR5925ALIAR BENEFICIOS MUTUOS6008IPATINGA62070503***6304A1B2',
    },
    incident: {
      id: 'EV-2026-4402',
      date: '14/09/2026',
      type: 'Colisão Traseira Leve',
      workshop: 'Oficina Credenciada Centro Automotivo Vale - Ipatinga/MG',
      step: 3, // 1: Comunicado, 2: Vistoria, 3: Reparação, 4: Concluído
      expectedDate: '02/10/2026',
    },
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockAssociate.currentBill.pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleCopyBarcode = () => {
    navigator.clipboard.writeText(mockAssociate.currentBill.barcode);
    setCopiedBarcode(true);
    setTimeout(() => setCopiedBarcode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Portal do Associado Aliar</div>
              <div className="text-[11px] text-slate-300">Segunda via, carteirinha digital e eventos</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <div className="w-full sm:w-auto flex-1 flex gap-2">
            <input
              type="text"
              value={cpfOrPlate}
              onChange={(e) => setCpfOrPlate(e.target.value)}
              placeholder="Digite seu CPF ou Placa do Veículo"
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setSearchDone(true)}
              className="px-3.5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shrink-0 cursor-pointer"
            >
              Consultar
            </button>
          </div>
          <div className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1.5 font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Matrícula Ativa</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-white">
          <button
            onClick={() => setActiveTab('boleto')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'boleto'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2ª Via do Boleto / PIX
          </button>
          <button
            onClick={() => setActiveTab('carteirinha')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'carteirinha'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Carteirinha Digital
          </button>
          <button
            onClick={() => setActiveTab('evento')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'evento'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Acompanhar Sinistro (Evento)
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'boleto' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Mensalidade Vigente</div>
                  <div className="text-sm font-bold text-slate-900">{mockAssociate.currentBill.monthRef}</div>
                  <div className="text-xs text-slate-600 mt-0.5">Vencimento: <strong>{mockAssociate.currentBill.dueDate}</strong></div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Valor do Rateio</div>
                  <div className="text-2xl font-extrabold text-blue-700 tabular-nums">
                    {mockAssociate.currentBill.value}
                  </div>
                </div>
              </div>

              {/* PIX Instant payment */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Pague Instantaneamente via PIX
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Baixa automática em até 5 minutos para manter sua cobertura sem interrupções.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    onClick={handleCopyPix}
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPix ? 'Chave PIX Copiada!' : 'Copiar Código PIX Copia e Cola'}</span>
                  </button>
                </div>
              </div>

              {/* Barcode line */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="text-xs font-bold text-slate-700">Linha Digitável do Boleto Bancário</div>
                <div className="p-2.5 bg-white border border-slate-200 rounded font-mono text-xs text-slate-800 break-all select-all">
                  {mockAssociate.currentBill.barcode}
                </div>
                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleCopyBarcode}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedBarcode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBarcode ? 'Código copiado!' : 'Copiar linha digitável'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'carteirinha' && (
            <div className="space-y-4">
              {/* Virtual Membership Card */}
              <div className="bg-gradient-to-tr from-slate-900 via-blue-950 to-blue-900 text-white p-6 rounded-2xl border border-blue-500/20 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-amber-400" />
                    <span className="font-bold text-base tracking-wide">Aliar Proteção Veicular</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                    ATIVO
                  </span>
                </div>

                <div>
                  <div className="text-[11px] text-slate-300">Associado Titular</div>
                  <div className="text-lg font-bold text-white">{mockAssociate.name}</div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Veículo</span>
                    <strong className="text-slate-100">{mockAssociate.vehicle}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Placa</span>
                    <strong className="text-amber-300 tracking-wider font-mono">{mockAssociate.plate}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Matrícula</span>
                    <span className="font-mono text-slate-200">{mockAssociate.matricula}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-white/10">
                  <span>Plano: {mockAssociate.plan}</span>
                  <span>Validade: {mockAssociate.validUntil}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-100 p-3 rounded-xl">
                <span>Precisa do regulamento ou estatuto da associação?</span>
                <a
                  href="#regulamento"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Regulamento Interno da Aliar baixado com sucesso!');
                  }}
                  className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Baixar Regulamento PDF
                </a>
              </div>
            </div>
          )}

          {activeTab === 'evento' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-500">Protocolo do Evento:</span>
                    <span className="text-sm font-bold text-slate-900 ml-1.5 font-mono">{mockAssociate.incident.id}</span>
                  </div>
                  <span className="text-xs text-slate-500">{mockAssociate.incident.date}</span>
                </div>
                <div className="mt-2 text-xs text-slate-700">
                  Tipo: <strong>{mockAssociate.incident.type}</strong>
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Local de Reparo: {mockAssociate.incident.workshop}
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Andamento do Reparo
                </div>

                <div className="relative border-l-2 border-blue-600 ml-3 space-y-6 pl-5">
                  <div className="relative">
                    <div className="absolute -left-[27px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white" />
                    <div className="text-xs font-bold text-slate-900">1. Aviso do Evento & Documentos Recebidos</div>
                    <div className="text-[11px] text-slate-500">BO e fotos do incidente validadas pela equipe técnica.</div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[27px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white" />
                    <div className="text-xs font-bold text-slate-900">2. Vistoria Prévia & Orçamento Aprovado</div>
                    <div className="text-[11px] text-slate-500">Peças originais autorizadas junto à oficina credenciada.</div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[27px] top-0 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white animate-pulse" />
                    <div className="text-xs font-bold text-amber-600">3. Reparo em Execução na Oficina (Atual)</div>
                    <div className="text-[11px] text-slate-600">
                      Funilaria e pintura em andamento. Previsão de entrega: <strong>{mockAssociate.incident.expectedDate}</strong>.
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[27px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white" />
                    <div className="text-xs font-medium text-slate-400">4. Vistoria Final & Liberação do Veículo</div>
                    <div className="text-[11px] text-slate-400">Inspeção de qualidade e entrega das chaves.</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Dúvidas sobre sua associação? 0800 591 0000</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
