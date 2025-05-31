import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertTriangle, DollarSign, Users, BarChart3, Zap, Target, Gamepad2, Star } from 'lucide-react';

const SupercellIntro = () => (
  <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white py-16 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20"></div>
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg">
            <Star className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white">Supercell</h2>
            <p className="text-blue-200 text-lg">Data Observability Impact Assessment</p>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold mb-4">Powering Player Experience Through Data Excellence</h3>
          <p className="text-lg text-blue-100 leading-relaxed">
            As a world-leading mobile game developer with titles like Clash of Clans, Clash Royale, and Hay Day, 
            Supercell processes billions of player interactions daily. Reliable data observability ensures 
            your game analytics, player behavior insights, and business metrics remain accurate and actionable.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <div className="text-sm text-blue-200">Game Analytics</div>
              <div className="text-lg font-semibold">Real-time Insights</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-sm text-blue-200">Player Data</div>
              <div className="text-lg font-semibold">Billion+ Events/Day</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-sm text-blue-200">Business Impact</div>
              <div className="text-lg font-semibold">Revenue Protection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InputField = ({ label, value, onChange, placeholder, prefix = '', suffix = '', description = '' }) => (
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
        className={`w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white ${
          prefix ? 'pl-8' : ''
        } ${suffix ? 'pr-12' : ''}`}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-sm">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

const ResultCard = ({ icon: Icon, title, value, subtitle, gradient = 'from-blue-600 to-slate-700' }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-200">
    <div className={`bg-gradient-to-r ${gradient} p-1`}>
      <div className="bg-white m-1 p-6 rounded-xl">
        <div className="flex items-center space-x-3 mb-3">
          <div className={`p-2 bg-gradient-to-r ${gradient} rounded-xl`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-slate-800">{title}</h3>
        </div>
        <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
          {value}
        </div>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [inputs, setInputs] = useState({
    dataTeamSize: 15,
    timeOnDataQuality: 35,
    averageSalary: 130000,
    affectedDashboards: 12,
    dashboardDowntimeHours: 4,
    productivityGainPercent: 10,
    hourlyBusinessValue: 150
  });

  const [synqCost, setSynqCost] = useState(60000);

  const updateInput = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  // Calculations
  const monthlyTeamCost = (inputs.dataTeamSize * inputs.averageSalary * (inputs.timeOnDataQuality / 100)) / 12;
  const monthlyDashboardCost = inputs.affectedDashboards * inputs.dashboardDowntimeHours * (inputs.averageSalary / 12 / 160);
  const monthlyHoursWorked = inputs.dataTeamSize * 160;
  const hoursGainedPerMonth = monthlyHoursWorked * (inputs.productivityGainPercent / 100);
  const monthlyProductivityValue = hoursGainedPerMonth * inputs.hourlyBusinessValue;
  const totalMonthlyCost = monthlyTeamCost + monthlyDashboardCost;
  const annualCost = totalMonthlyCost * 12;
  const annualProductivityGain = monthlyProductivityValue * 12;
  const monthlySavings = totalMonthlyCost * 0.65;
  const annualSavings = monthlySavings * 12;
  const totalAnnualBenefit = annualSavings + annualProductivityGain;
  const netGain = totalAnnualBenefit - synqCost;
  const roiPercentage = synqCost > 0 ? ((netGain / synqCost) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <SupercellIntro />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-slate-700 bg-clip-text text-transparent mb-4">
            SYNQ ROI Calculator for Gaming
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Calculate the potential impact of implementing SYNQ's data observability platform.
            <span className="block mt-2 text-lg text-blue-600 font-medium">
              Tailored for gaming companies processing billions of player events.
            </span>
          </p>
        </div>

        {/* Input and Results Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Inputs */}
          <div className="space-y-6">
            {/* Team Inputs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Your Gaming Data Team
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 space-y-4">
                <InputField
                  label="Data team size (engineers, analysts, scientists)"
                  value={inputs.dataTeamSize}
                  onChange={(value) => updateInput('dataTeamSize', value)}
                  placeholder="e.g., 15"
                  description="Include data engineers, game analysts, and data scientists"
                />
                <InputField
                  label="% time spent on data quality issues"
                  value={inputs.timeOnDataQuality}
                  onChange={(value) => updateInput('timeOnDataQuality', value)}
                  placeholder="e.g., 35"
                  suffix="%"
                  description="Time debugging player data issues, fixing game metrics, data pipeline problems"
                />
                <InputField
                  label="Average annual salary (incl. benefits)"
                  value={inputs.averageSalary}
                  onChange={(value) => updateInput('averageSalary', value)}
                  placeholder="130000"
                  prefix="$"
                  description="Total compensation including benefits, equity, and overhead"
                />
              </div>
            </div>

            {/* Business Impact Inputs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-orange-600" />
                Gaming Business Impact
              </h2>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 space-y-4">
                <h3 className="font-semibold text-slate-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Game Analytics & Dashboard Failures
                </h3>
                <InputField
                  label="Failed dashboards/reports per month"
                  value={inputs.affectedDashboards}
                  onChange={(value) => updateInput('affectedDashboards', value)}
                  placeholder="e.g., 12"
                  description="Player behavior dashboards, revenue reports, game performance metrics"
                />
                <InputField
                  label="Average time to fix (hours)"
                  value={inputs.dashboardDowntimeHours}
                  onChange={(value) => updateInput('dashboardDowntimeHours', value)}
                  placeholder="e.g., 4"
                  description="Time to identify, debug, and resolve data quality issues"
                />
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 space-y-4">
                <h3 className="font-semibold text-slate-800 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Team Productivity Gains with SYNQ
                </h3>
                <InputField
                  label="Expected productivity gain from automation"
                  value={inputs.productivityGainPercent}
                  onChange={(value) => updateInput('productivityGainPercent', value)}
                  placeholder="e.g., 10"
                  suffix="%"
                  description="Additional time freed up for high-value feature development and analytics"
                />
                <InputField
                  label="Business value per developer hour"
                  value={inputs.hourlyBusinessValue}
                  onChange={(value) => updateInput('hourlyBusinessValue', value)}
                  placeholder="e.g., 150"
                  prefix="$"
                  description="Revenue impact from feature development, optimization, and analytics projects"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Current Costs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-red-600" />
                Current Data Quality Costs
              </h2>

              <ResultCard
                icon={Users}
                title="Monthly Team Overhead"
                value={`$${Math.round(monthlyTeamCost).toLocaleString()}`}
                subtitle="Team time spent on data quality issues"
                gradient="from-blue-500 to-slate-600"
              />
              <ResultCard
                icon={AlertTriangle}
                title="Monthly Total Cost"
                value={`$${Math.round(totalMonthlyCost).toLocaleString()}`}
                subtitle="Team overhead + dashboard downtime costs"
                gradient="from-orange-500 to-red-600"
              />
              <ResultCard
                icon={TrendingUp}
                title="Annual Cost Without SYNQ"
                value={`$${Math.round(annualCost).toLocaleString()}`}
                subtitle="Projected annual impact of data quality issues"
                gradient="from-red-500 to-pink-600"
              />
            </div>

            {/* Productivity Impact */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
                Productivity & Business Impact
              </h2>

              <ResultCard
                icon={Zap}
                title="Hours Freed Up Per Month"
                value={`${Math.round(hoursGainedPerMonth)} hrs`}
                subtitle={`${inputs.productivityGainPercent}% productivity gain across ${inputs.dataTeamSize} team members`}
                gradient="from-green-500 to-emerald-600"
              />
              <ResultCard
                icon={DollarSign}
                title="Monthly Business Value"
                value={`$${Math.round(monthlyProductivityValue).toLocaleString()}`}
                subtitle="Value from time redirected to high-impact projects"
                gradient="from-blue-500 to-green-600"
              />
              <ResultCard
                icon={Target}
                title="Annual Productivity Gain"
                value={`$${Math.round(annualProductivityGain).toLocaleString()}`}
                subtitle="Total business value from improved team efficiency"
                gradient="from-purple-500 to-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Full-width ROI Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-700 via-slate-800 to-blue-900 rounded-3xl shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://cdn.prod.website-files.com/67ac98ad91c902dafd02d636/67ac98ad91c902dafd02d680_diagram.as0DzT7j.webp" 
              alt="SYNQ Data Observability Platform" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 mr-4" />
                ROI with SYNQ Data Observability
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Transform your data operations with enterprise-grade observability and AI-powered automation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Investment Column */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold text-white mb-6">SYNQ Investment</h3>
                <div className="text-sm opacity-90 mb-4">Choose Your Tier</div>
                <select
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-lg font-medium mb-6"
                  value={synqCost}
                  onChange={(e) => setSynqCost(Number(e.target.value))}
                >
                  <option value={15000}>Starter - $15,000/year</option>
                  <option value={30000}>Professional - $30,000/year</option>
                  <option value={60000}>Enterprise - $60,000/year</option>
                  <option value={120000}>Enterprise Plus - $120,000/year</option>
                </select>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Annual Investment</div>
                  <div className="text-3xl font-bold text-yellow-300">${synqCost.toLocaleString()}</div>
                </div>
              </div>

              {/* Monthly Benefits Column */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold text-white mb-6">Monthly Benefits</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm opacity-90 mb-2">Cost Savings (65% reduction)</div>
                    <div className="text-2xl font-bold text-green-300">${Math.round(monthlySavings).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-2">Productivity Value</div>
                    <div className="text-2xl font-bold text-blue-300">${Math.round(monthlyProductivityValue).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-2">Total Monthly Benefit</div>
                    <div className="text-2xl font-bold text-white">${Math.round(monthlySavings + monthlyProductivityValue).toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Annual ROI Column */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Annual ROI</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm opacity-90 mb-2">Total Annual Benefit</div>
                    <div className="text-3xl font-bold text-white">${Math.round(totalAnnualBenefit).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-2">Net Gain After SYNQ</div>
                    <div className="text-2xl font-bold text-white">${Math.round(netGain).toLocaleString()}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                    <div className="text-sm opacity-90 mb-2">Return on Investment</div>
                    <div className="text-4xl font-bold text-white">{Math.round(roiPercentage)}%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 bg-opacity-20 border border-yellow-400 border-opacity-30 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center text-yellow-300 mb-4">
                <Star className="w-6 h-6 mr-3" />
                <span className="font-semibold text-lg">Gaming Industry Impact</span>
              </div>
              <p className="text-yellow-100 text-lg max-w-4xl mx-auto">
                Enhanced player experience through reliable game analytics, faster incident resolution, 
                and more time for your team to focus on high-value feature development and player engagement optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Why SYNQ Section */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="relative p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Why SYNQ for Gaming Leaders?
                </h3>
              </div>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Built specifically for data-intensive gaming companies that need enterprise-grade reliability 
                with cutting-edge AI automation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Scout AI Agent */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Scout AI Agent</h4>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Your autonomous data quality SRE that proactively monitors, analyzes, and resolves 
                  data quality issues across your gaming analytics pipelines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Proactive issue detection & resolution</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Intelligent test recommendations</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Automated code fixes & deployments</span>
                  </div>
                </div>
              </div>

              {/* dbt Integration */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Native dbt Integration</h4>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Seamlessly integrate with your existing dbt transformations to enhance data reliability 
                  and automatically surface critical issues across your entire dbt project.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-sm">End-to-end dbt pipeline monitoring</span>
                  </div>
                  <div className="flex items-center text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-sm">Automated data quality tracking</span>
                  </div>
                  <div className="flex items-center text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-sm">Critical issue surface detection</span>
                  </div>
                </div>
              </div>

              {/* Databricks & Iceberg */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Databricks & Iceberg</h4>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Full support for Databricks Unity Catalog and Apache Iceberg tables, 
                  enabling modern data architecture with enterprise-grade observability.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-sm">Unity Catalog native integration</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-sm">Iceberg table monitoring & quality</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-sm">Modern lakehouse architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaming Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 mr-3" />
                Built for Gaming Scale & Reliability
              </h4>
              <div className="grid md:grid-cols-4 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Data Pipeline Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-300 mb-2">&lt;5min</div>
                  <div className="text-sm opacity-90">Issue Detection Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
                  <div className="text-sm opacity-90">Autonomous Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-300 mb-2">65%</div>
                  <div className="text-sm opacity-90">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Footer */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <div className="text-center">
            <div className="border-t border-slate-200 pt-6">
              <p className="text-slate-600 mb-2 text-center">
                <strong>Methodology:</strong> Gaming industry calculations assume 65% reduction in data-related costs through proactive monitoring, 
                plus {inputs.productivityGainPercent}% productivity gains from automated incident resolution and AI-powered data quality management
              </p>
              <p className="text-sm text-slate-500 text-center">
                Results based on gaming industry benchmarks, SYNQ customer success stories, and estimated business value of developer productivity gains
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}