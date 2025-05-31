import React, { useState } from 'react';
import {
  Calculator, TrendingUp, AlertTriangle, DollarSign, Users, BarChart3, Zap
} from 'lucide-react';

// Input field component
const InputField = ({ label, value, onChange, placeholder, prefix = '', suffix = '', description = '' }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-800">{label}</label>
    {description && <p className="text-xs text-gray-600">{description}</p>}
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
          {prefix}
        </span>
      )}
      <input
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value || ''}
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white ${
          prefix ? 'pl-8' : ''
        } ${suffix ? 'pr-12' : ''}`}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

// Results card component
const ResultCard = ({ icon: Icon, title, value, subtitle, gradient = 'from-purple-500 to-blue-600' }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
    <div className={`bg-gradient-to-r ${gradient} p-1`}>
      <div className="bg-white m-1 p-5 rounded-xl">
        <div className="flex items-center space-x-3 mb-3">
          <div className={`p-2 bg-gradient-to-r ${gradient} rounded-xl`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
          {value}
        </div>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [inputs, setInputs] = useState({
    dataTeamSize: 0,
    timeOnDataQuality: 0,
    averageSalary: 100000,
    affectedDashboards: 0,
    dashboardDowntimeHours: 0,
    badDecisionCost: 0,
    badDecisionsPerMonth: 0,
    synqContractCost: 0
  });

  const updateInput = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const {
    dataTeamSize, timeOnDataQuality, averageSalary,
    affectedDashboards, dashboardDowntimeHours,
    badDecisionCost, badDecisionsPerMonth,
    synqContractCost
  } = inputs;

  const monthlyTeamCost = (dataTeamSize * averageSalary * (timeOnDataQuality / 100)) / 12;
  const monthlyDashboardCost = affectedDashboards * dashboardDowntimeHours * (averageSalary / 12 / 160);
  const monthlyBadDecisionCost = badDecisionsPerMonth * badDecisionCost;

  const totalMonthlyCost = monthlyTeamCost + monthlyDashboardCost + monthlyBadDecisionCost;
  const annualCost = totalMonthlyCost * 12;
  const monthlySavings = totalMonthlyCost * 0.5;
  const annualSavings = monthlySavings * 12;
  const netAnnualImpact = annualSavings - synqContractCost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Data Observability ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate the potential cost savings from implementing data observability solutions. 
            <span className="block mt-2 text-lg text-purple-600 font-medium">
              Built for data teams delivering business-critical impact.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-600" />
                Your Data Team
              </h2>
              <div className="space-y-6">
                <InputField label="Team size" value={dataTeamSize} onChange={(v) => updateInput('dataTeamSize', v)} placeholder="e.g. 5" />
                <InputField label="% time on data quality" value={timeOnDataQuality} onChange={(v) => updateInput('timeOnDataQuality', v)} placeholder="e.g. 30" suffix="%" />
                <InputField label="Average salary" value={averageSalary} onChange={(v) => updateInput('averageSalary', v)} placeholder="e.g. 100000" prefix="$" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                Business Impact
              </h2>
              <div className="space-y-6">
                <InputField label="Failed dashboards/mo" value={affectedDashboards} onChange={(v) => updateInput('affectedDashboards', v)} placeholder="e.g. 5" />
                <InputField label="Downtime per dashboard (hrs)" value={dashboardDowntimeHours} onChange={(v) => updateInput('dashboardDowntimeHours', v)} placeholder="e.g. 2" />
                <InputField label="Bad decisions/mo" value={badDecisionsPerMonth} onChange={(v) => updateInput('badDecisionsPerMonth', v)} placeholder="e.g. 2" />
                <InputField label="Cost per bad decision" value={badDecisionCost} onChange={(v) => updateInput('badDecisionCost', v)} placeholder="e.g. 10000" prefix="$" />
                <InputField label="SYNQ contract cost (annual)" value={synqContractCost} onChange={(v) => updateInput('synqContractCost', v)} placeholder="15000, 30000, or 60000" prefix="$" />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <ResultCard icon={DollarSign} title="Monthly Cost" value={`$${totalMonthlyCost.toLocaleString()}`} subtitle="Current monthly impact of data issues" />
            <ResultCard icon={TrendingUp} title="Annual Cost" value={`$${annualCost.toLocaleString()}`} subtitle="Current annual cost of poor data quality" />
            <ResultCard icon={Zap} title="Annual Savings (50%)" value={`$${annualSavings.toLocaleString()}`} subtitle="Potential cost savings with observability" />
            <ResultCard icon={Calculator} title="Net Benefit After SYNQ" value={`$${netAnnualImpact.toLocaleString()}`} subtitle="Savings minus contract cost" gradient="from-green-500 to-teal-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
