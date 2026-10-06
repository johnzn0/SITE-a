import React from 'react';
import { Shield, Phone, Mail, MapPin, ExternalLink, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onOpenMemberPortal: () => void;
  onOpenEmergency: () => void;
  onScrollToQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMemberPortal,
  onOpenEmergency,
  onScrollToQuote,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Aliar Proteção Veicular
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Aliar Proteção Patrimonial Mutualista. Associação civil de benefícios mútuos sem fins lucrativos, unindo associados para proteção automotiva justa, ética e transparente em todo o Brasil.
            </p>
            <div className="text-[11px] text-slate-500">
              CNPJ: 25.358.772/0001-20 · Fundada em 2016
            </div>
          </div>

          {/* Col 2: Serviços & Navegação */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Serviços & Links
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onScrollToQuote} className="hover:text-white transition-colors cursor-pointer">
                  Simulação de Cotação Online
                </button>
              </li>
              <li>
                <a href="#coberturas" className="hover:text-white transition-colors">
                  Coberturas (Roubo, Furto, Colisão)
                </a>
              </li>
              <li>
                <button onClick={onOpenEmergency} className="hover:text-rose-400 transition-colors cursor-pointer text-left">
                  Assistência 24 Horas & Guincho
                </button>
              </li>
              <li>
                <a href="#clube" className="hover:text-white transition-colors">
                  Clube Aliar de Benefícios
                </a>
              </li>
              <li>
                <button onClick={onOpenMemberPortal} className="hover:text-white transition-colors cursor-pointer text-left">
                  2ª Via de Boleto & PIX Instantâneo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Canais Oficiais */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Canais de Atendimento
            </div>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>0800 591 0000 (Emergência 24h)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contato@aliar.org.br" className="hover:text-white">
                  contato@aliar.org.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Ipatinga - Minas Gerais (Vale do Aço) · Atuação Nacional</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Área do Associado Rápida */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Área Exclusiva
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Acesse sua carteirinha digital, emita seu boleto ou comunique um evento a qualquer momento.
            </p>
            <button
              onClick={onOpenMemberPortal}
              className="w-full py-2.5 px-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Acessar Portal do Associado</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer according to Brazilian Mutualism framework */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Aviso Institucional:</strong> A Aliar é uma associação de benefícios mútuos (entidade sem fins lucrativos), devidamente instituída conforme os artigos 5º, incisos XVII e XVIII da Constituição Federal Brasileira e artigos 53 e seguintes do Código Civil Brasileiro (Lei 10.406/2002). A proteção patrimonial mutualista opera sob a modalidade de rateio compartilhado entre os membros associados e não deve ser confundida com contrato de seguro mercantil regido pelo Decreto-Lei nº 73/66.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-900 gap-2">
            <div>
              © {new Date().getFullYear()} Aliar Benefícios Mútuos. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#termos" className="hover:text-slate-200">Regulamento Interno</a>
              <span>·</span>
              <a href="#privacidade" className="hover:text-slate-200">Política de Privacidade</a>
              <span>·</span>
              <a href="#ouvidoria" className="hover:text-slate-200">Ouvidoria</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
