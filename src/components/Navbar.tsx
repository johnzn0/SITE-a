import React, { useState } from 'react';
import { Shield, PhoneCall, UserCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEmergency: () => void;
  onOpenMemberPortal: () => void;
  onScrollToQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEmergency,
  onOpenMemberPortal,
  onScrollToQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single clean text element wordmark */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 flex items-center justify-center text-white shadow-sm ring-1 ring-blue-600/30 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-amber-400 fill-amber-400/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              Aliar
            </span>
            <span className="text-[11px] font-semibold text-blue-700 tracking-wider uppercase mt-0.5">
              Proteção Veicular
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#coberturas" className="hover:text-blue-700 transition-colors">
            Coberturas
          </a>
          <button
            onClick={onScrollToQuote}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Simular Proteção
          </button>
          <a href="#assistencia" className="hover:text-blue-700 transition-colors">
            Assistência 24h
          </a>
          <a href="#clube" className="hover:text-blue-700 transition-colors">
            Clube de Vantagens
          </a>
          <a href="#duvidas" className="hover:text-blue-700 transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenMemberPortal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/70 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>Área do Associado</span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Central de Emergência e Reboque 24h"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Socorro 24h</span>
          </button>

          <button
            onClick={onScrollToQuote}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            Cotação Rápida
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenEmergency}
            className="p-2 text-rose-600 bg-rose-50 rounded-lg border border-rose-200"
            aria-label="Socorro Emergencial"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#coberturas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Coberturas
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToQuote();
            }}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Simular Proteção
          </button>
          <a
            href="#assistencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Assistência 24h
          </a>
          <a
            href="#clube"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Clube de Vantagens
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Dúvidas & FAQ
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMemberPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
              Área do Associado (2ª via de boleto)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToQuote();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center shadow-xs"
            >
              Fazer Cotação Instantânea
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
