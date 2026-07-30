"use client";

import { useState } from "react";
import { formatCRC, formatUSD } from "@/data/propiedades";
import { whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { Dict, tpl } from "@/i18n/dictionaries";

export default function FinancingCalculator({
  precio,
  titulo,
  dict,
}: {
  precio: number;
  titulo: string;
  dict: Dict;
}) {
  const [primaPct, setPrimaPct] = useState(20);
  const [plazo, setPlazo] = useState(20);
  const [tasa, setTasa] = useState(9);

  const monto = precio * (1 - primaPct / 100);
  const tasaMensual = tasa / 100 / 12;
  const meses = plazo * 12;
  const cuota =
    tasaMensual === 0
      ? monto / meses
      : (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));

  return (
    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold text-secondary-700 mb-5 flex items-center gap-2">
        <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        {dict.calc.titulo}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>{dict.calc.prima}</span>
            <span className="text-primary-700 font-bold">{primaPct}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={50}
            step={5}
            value={primaPct}
            onChange={(e) => setPrimaPct(Number(e.target.value))}
            className="w-full accent-primary-700"
          />
        </div>
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>{dict.calc.plazo}</span>
            <span className="text-primary-700 font-bold">
              {plazo} {dict.calc.anios}
            </span>
          </label>
          <input
            type="range"
            min={5}
            max={30}
            step={5}
            value={plazo}
            onChange={(e) => setPlazo(Number(e.target.value))}
            className="w-full accent-primary-700"
          />
        </div>
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>{dict.calc.tasa}</span>
            <span className="text-primary-700 font-bold">{tasa}%</span>
          </label>
          <input
            type="range"
            min={4}
            max={15}
            step={0.5}
            value={tasa}
            onChange={(e) => setTasa(Number(e.target.value))}
            className="w-full accent-primary-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-500 text-sm">{dict.calc.montoFinanciar}</p>
          <p className="text-secondary-700 font-bold text-xl mt-1">
            {formatCRC(Math.round(monto))}
          </p>
          <p className="text-gray-400 text-sm">≈ {formatUSD(monto)} USD</p>
        </div>
        <div className="bg-primary-700 rounded-lg p-4">
          <p className="text-primary-100 text-sm">{dict.calc.cuota}</p>
          <p className="text-white font-bold text-xl mt-1">
            {formatCRC(Math.round(cuota))}
          </p>
          <p className="text-primary-200 text-sm">≈ {formatUSD(cuota)} USD</p>
        </div>
      </div>

      <p className="text-gray-400 text-xs mt-4">{dict.calc.nota}</p>

      <a
        href={whatsappUrl(tpl(dict.calc.waMsg, { titulo }))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
      >
        <WhatsAppIcon className="w-4 h-4" />
        {dict.calc.consultar}
      </a>
    </div>
  );
}
