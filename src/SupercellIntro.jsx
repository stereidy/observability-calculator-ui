// src/SupercellIntro.jsx
import React from 'react';
import React from 'react';

const SupercellIntro = () => (
  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-green-800 shadow-sm">
    <h2 className="text-xl font-bold mb-2">How SYNQ Helps Supercell</h2>
    <p className="text-sm">
      Supercell relies heavily on accurate in-game analytics, live ops metrics, and player segmentation.
      SYNQ helps game studios reduce downtime in dashboards, improve the accuracy of player-facing features,
      and automate incident resolution — freeing up engineers to focus on what matters.
    </p>
  </div>
);

export default SupercellIntro;export const InputField = ({ label, value, onChange, placeholder, prefix = '', suffix = '', description = '' }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-slate-800">{label}</label>
    {description && <p className="text-xs text-slate-600">{description}</p>}
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-sm">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-12' : ''}`} />
      {suffix && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-sm">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

