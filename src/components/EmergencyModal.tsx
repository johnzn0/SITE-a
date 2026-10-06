import React, { useState } from 'react';
import { X, AlertTriangle, Truck, MapPin, PhoneCall, Check, Clock, Radio } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [serviceType, setServiceType] = useState('guincho');
  const [plate, setPlate] = useState('');
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  const handleGetLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocation('Av. Pedro Linhares Gomes, BR-381 - Ipatinga, MG (Km 206)');
      setIsLocating(false);
    }, 900);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatched(true);
  };

  const handleReset = () => {
    setDispatched(false);
    setPlate('');
    setLocation('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-rose-200 overflow-hidden">
        {/* Header with emergency alert branding */}
        <div className="p-4 bg-rose-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-rose-700/80 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-sm font-bold">Acionamento de Emergência 24h</div>
              <div className="text-[11px] text-rose-100">Central de Assistência Aliar em todo Brasil</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-rose-200 hover:text-white rounded-lg hover:bg-rose-700 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!dispatched ? (
            <form onSubmit={handleDispatch} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Qual socorro você precisa agora?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'guincho', label: 'Reboque / Guincho' },
                    { id: 'colisao', label: 'Acidente / Colisão' },
                    { id: 'bateria', label: 'Carga de Bateria' },
                    { id: 'pneu', label: 'Troca de Pneu' },
                    { id: 'chaveiro', label: 'Chaveiro' },
                    { id: 'combustivel', label: 'Pane Seca' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left transition-colors cursor-pointer ${
                        serviceType === item.id
                          ? 'bg-rose-50 border-rose-500 text-rose-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Placa do Veículo Protegido
                </label>
                <input
                  type="text"
                  required
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  placeholder="Ex: ABC-1D23"
                  maxLength={8}
                  className="w-full px-3 py-2 text-sm font-mono uppercase bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Sua Localização Atual
                  </label>
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{isLocating ? 'Obtendo GPS...' : 'Usar meu GPS'}</span>
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Rua, rodovia, km ou ponto de referência"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>Confirmar & Despachar Socorro Imediato</span>
                </button>

                <a
                  href="tel:08005910000"
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-slate-600" />
                  <span>Prefere ligar? 0800 591 0000 (Ligação Grátis)</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center py-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">Socorro Despachado com Sucesso!</h3>
                <p className="text-xs text-slate-600 mt-1">
                  A base regional mais próxima já foi acionada para atender a placa <strong>{plate || 'ALI-0000'}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Prestador Credenciado:</span>
                  <strong className="text-slate-900">Auto Socorro Rápido Vale</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Veículo de Apoio:</span>
                  <span className="font-mono font-bold text-slate-800">Guincho Plataforma Pesada</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Previsão Estimada de Chegada:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 25 a 35 minutos
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 text-slate-600">
                  <span>Local confirmado: </span>
                  <span className="font-medium text-slate-800">{location || 'Via pública informada'}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleReset}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Novo chamado de emergência
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Concluir & Acompanhar no Celular
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
