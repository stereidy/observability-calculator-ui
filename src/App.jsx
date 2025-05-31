import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertTriangle, DollarSign, Users, BarChart3, Zap } from 'lucide-react';

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
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
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
    badDecisionsPerMonth: 0
  });

  const [synqCost, setSynqCost] = useState(0);

  const updateInput = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const monthlyTeamCost = (inputs.dataTeamSize * inputs.averageSalary * (inputs.timeOnDataQuality / 100)) / 12;
  const monthlyDashboardCost = inputs.affectedDashboards * inputs.dashboardDowntimeHours * (inputs.averageSalary / 12 / 160);
  const monthlyBadDecisionCost = inputs.badDecisionsPerMonth * inputs.badDecisionCost;
  const totalMonthlyCost = monthlyTeamCost + monthlyDashboardCost + monthlyBadDecisionCost;
  const annualCost = totalMonthlyCost * 12;
  const monthlySavings = totalMonthlyCost * 0.5;
  const annualSavings = monthlySavings * 12;
  const netGain = annualSavings - synqCost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
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
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-600" />
                Your Data Team
              </h2>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 space-y-4">
                <InputField
                  label="How many people in your data team?"
                  value={inputs.dataTeamSize}
                  onChange={(value) => updateInput('dataTeamSize', value)}
                  placeholder="e.g., 5"
                  description="Include data engineers, analysts, and scientists"
                />
                <InputField
                  label="% of time spent on data quality issues"
                  value={inputs.timeOnDataQuality}
                  onChange={(value) => updateInput('timeOnDataQuality', value)}
                  placeholder="e.g., 30"
                  suffix="%"
                  description="Time debugging, fixing, and preventing data issues"
                />
                <InputField
                  label="Average salary of team members"
                  value={inputs.averageSalary}
                  onChange={(value) => updateInput('averageSalary', value)}
                  placeholder="100000"
                  prefix="$"
                  description="Annual salary including benefits and overhead"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                Business Impact
              </h2>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Dashboard & Report Failures
                </h3>
                <InputField
                  label="Failed dashboards per month"
                  value={inputs.affectedDashboards}
                  onChange={(value) => updateInput('affectedDashboards', value)}
                  placeholder="e.g., 8"
                />
                <InputField
                  label="Average time to fix (hours)"
                  value={inputs.dashboardDowntimeHours}
                  onChange={(value) => updateInput('dashboardDowntimeHours', value)}
                  placeholder="e.g., 3"
                />
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
                  Business Decisions Based on Bad Data
                </h3>
                <InputField
                  label="Bad decisions per month"
                  value={inputs.badDecisionsPerMonth}
                  onChange={(value) => updateInput('badDecisionsPerMonth', value)}
                  placeholder="e.g., 2"
                />
                <InputField
                  label="Average cost per bad decision"
                  value={inputs.badDecisionCost}
                  onChange={(value) => updateInput('badDecisionCost', value)}
                  placeholder="e.g., 10000"
                  prefix="$"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-red-600" />
                Current Costs
              </h2>

              <ResultCard
                icon={Users}
                title="Monthly Team Cost"
                value={`$${monthlyTeamCost.toLocaleString()}`}
                subtitle="Time spent on data quality issues"
              />
              <ResultCard
                icon={AlertTriangle}
                title="Monthly Total Cost"
                value={`$${totalMonthlyCost.toLocaleString()}`}
                subtitle="All data quality related costs"
                gradient="from-red-500 to-pink-600"
              />
              <ResultCard
                icon={TrendingUp}
                title="Annual Total Cost"
                value={`$${annualCost.toLocaleString()}`}
                subtitle="Projected annual cost without observability"
                gradient="from-orange-500 to-red-600"
              />
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden space-y-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                ROI with Data Observability
              </h2>
              <div>
                <div className="text-sm opacity-90 mb-1">Monthly Savings (50% reduction)</div>
                <div className="text-4xl font-bold">${monthlySavings.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">Annual Savings</div>
                <div className="text-5xl font-bold">${annualSavings.toLocaleString()}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 text-green-800">
                <div className="font-semibold text-sm mb-2">Select SYNQ Contract Tier</div>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                  value={synqCost}
                  onChange={(e) => setSynqCost(Number(e.target.value))}
                >
                  <option value={0}>None</option>
                  <option value={15000}>$15,000</option>
                  <option value={30000}>$30,000</option>
                  <option value={60000}>$60,000</option>
                </select>
              </div>
              <div>
                <div className="text-sm opacity-90 mt-4">Net Gain After SYNQ</div>
                <div className="text-4xl font-bold text-green-300">${netGain.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <p className="text-gray-600 mb-2">
            <strong>Methodology:</strong> Calculations assume a 50% reduction in data-related costs with proper observability implementation
          </p>
          <p className="text-sm text-gray-500">
            Results based on industry benchmarks and customer success stories from leading data observability platforms
          </p>
        </div>
      </div>
    </div>
  );
}



