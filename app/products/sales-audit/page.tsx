import Link from 'next/link'
import { ArrowRight, CheckCircle, FileSearch, BarChart3, AlertCircle, Target, TrendingUp, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2B Sales Audit Tool | Find Where Your Revenue Is Leaking | Zaash',
  description: 'The Zaash Sales Audit analyses your CRM, prospecting tools, and sales process. Delivers a score, gap analysis, and 30-day action plan. Specific to your company, not generic advice.',
  keywords: ['sales audit tool', 'B2B sales diagnostic', 'revenue readiness assessment', 'CRM audit', 'sales process analysis'],
}

export default function SalesAuditPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success text-sm font-medium">Live Product</span>
              </div>
              <h1 className="text-h1 font-display font-bold mb-6">
                Sales Audit Tool
              </h1>
              <p className="text-xl text-grey-100 mb-8 max-w-xl">
                Find out where your revenue is leaking. Get a diagnostic score, gap analysis, and 30-day action plan—specific to your company, not generic advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover">
                  Book Full Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                  Try Free Diagnostic
                </Link>
              </div>
              <p className="text-grey-400 text-sm mt-6">
                Full audit: ₹2.5L • 50+ data points • 2-week turnaround
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-display font-semibold mb-6">Sample Audit Score</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-grey-400">Overall Sales Readiness</span>
                  <span className="text-4xl font-bold text-accent">67/100</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-grey-300">CRM Health</span>
                      <span className="text-sm text-success font-medium">85/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-success rounded-full h-2" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-grey-300">Pipeline Visibility</span>
                      <span className="text-sm text-warning font-medium">58/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-warning rounded-full h-2" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-grey-300">Outbound Capability</span>
                      <span className="text-sm text-danger font-medium">32/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-danger rounded-full h-2" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-grey-300">Process Documentation</span>
                      <span className="text-sm text-warning font-medium">41/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-warning rounded-full h-2" style={{ width: '41%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-danger">23</div>
                      <div className="text-xs text-grey-400">Critical Gaps</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">8</div>
                      <div className="text-xs text-grey-400">Quick Wins</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Audited */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-h2 font-display font-bold mb-6">
              What we audit
            </h2>
            <p className="text-xl text-grey-600">
              50+ data points across your entire sales stack, process, and team capability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'CRM Health',
                items: [
                  'Data completeness and accuracy',
                  'Required field compliance',
                  'Duplicate detection',
                  'Stage velocity and conversion rates',
                  'Deal aging and stagnation'
                ]
              },
              {
                icon: Target,
                title: 'Pipeline Architecture',
                items: [
                  'Stage definitions and criteria',
                  'Qualification framework',
                  'Handoff protocols',
                  'Forecast accuracy',
                  'Win/loss analysis'
                ]
              },
              {
                icon: FileSearch,
                title: 'Process Documentation',
                items: [
                  'Sales playbooks',
                  'Prospecting sequences',
                  'Proposal templates',
                  'Objection handling scripts',
                  'Onboarding materials'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Outbound Capability',
                items: [
                  'Prospecting volume and consistency',
                  'List quality and targeting',
                  'Sequence effectiveness',
                  'Response and conversion rates',
                  'Tool utilization (Apollo, ZoomInfo, etc.)'
                ]
              },
              {
                icon: Shield,
                title: 'Sales Enablement',
                items: [
                  'Rep onboarding and training',
                  'Content and collateral library',
                  'Competitive intelligence',
                  'Case studies and proof points',
                  'Sales-marketing alignment'
                ]
              },
              {
                icon: AlertCircle,
                title: 'Leading Indicators',
                items: [
                  'Activity metrics (calls, emails, meetings)',
                  'Pipeline coverage ratio',
                  'New opportunity creation rate',
                  'Time-to-first-meeting',
                  'Multi-threading in accounts'
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-h5 font-display font-semibold mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-h2 font-display font-bold mb-6">
              What you get
            </h2>
            <p className="text-xl text-grey-600">
              Not a generic PDF report. A specific, actionable roadmap for your company.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-accent-subtle rounded-xl p-6">
                <h3 className="text-h5 font-display font-semibold mb-2">
                  Overall Sales Readiness Score
                </h3>
                <p className="text-grey-600 text-sm mb-4">
                  0-100 score with band classification (Red/Amber/Green) and benchmark comparison against similar companies.
                </p>
                <div className="bg-white rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Your Score</span>
                    <span className="text-3xl font-bold text-accent">67</span>
                  </div>
                  <div className="text-xs text-grey-600">
                    Amber Band • Below median for IT services companies
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-grey-200">
                <h3 className="text-h5 font-display font-semibold mb-4">
                  Category Breakdown
                </h3>
                <div className="space-y-3">
                  {[
                    { category: 'CRM Health', score: 85, status: 'green' },
                    { category: 'Pipeline Visibility', score: 58, status: 'amber' },
                    { category: 'Outbound Capability', score: 32, status: 'red' },
                    { category: 'Process Documentation', score: 41, status: 'red' },
                    { category: 'Sales Enablement', score: 74, status: 'green' },
                    { category: 'Leading Indicators', score: 52, status: 'amber' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-grey-700">{item.category}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${
                          item.status === 'green' ? 'text-success' :
                          item.status === 'amber' ? 'text-warning' :
                          'text-danger'
                        }`}>
                          {item.score}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'green' ? 'bg-success' :
                          item.status === 'amber' ? 'bg-warning' :
                          'bg-danger'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-grey-200">
                <h3 className="text-h5 font-display font-semibold mb-4">
                  Gap Analysis
                </h3>
                <p className="text-grey-600 text-sm mb-4">
                  Every gap identified, categorized by severity (Critical/High/Medium/Low), and prioritized by business impact.
                </p>
                <ul className="space-y-3">
                  {[
                    { gap: 'No systematic prospecting motion', severity: 'Critical', impact: 'High' },
                    { gap: 'CRM missing required fields', severity: 'High', impact: 'Medium' },
                    { gap: 'Pipeline stages poorly defined', severity: 'Critical', impact: 'High' },
                    { gap: 'No onboarding playbook', severity: 'Medium', impact: 'Medium' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 pb-3 border-b border-grey-100 last:border-0">
                      <div>
                        <div className="text-sm font-medium text-grey-900">{item.gap}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.severity === 'Critical' ? 'bg-danger/10 text-danger' :
                            item.severity === 'High' ? 'bg-warning/10 text-warning' :
                            'bg-info/10 text-info'
                          }`}>
                            {item.severity}
                          </span>
                          <span className="text-xs text-grey-500">Impact: {item.impact}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/5 rounded-xl p-6 border border-success/20">
                <h3 className="text-h5 font-display font-semibold mb-4">
                  30-Day Action Plan
                </h3>
                <p className="text-grey-600 text-sm mb-4">
                  Quick wins you can implement immediately, sequenced by dependency and effort required.
                </p>
                <ul className="space-y-2">
                  {[
                    'Define required fields in CRM (Week 1)',
                    'Clean duplicate contacts and companies (Week 1-2)',
                    'Document current sales stages (Week 2)',
                    'Set up weekly pipeline review (Week 3)',
                    'Build initial prospecting list (Week 3-4)',
                    'Launch first outbound sequence (Week 4)'
                  ].map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-grey-700">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-12 text-center">
              Two ways to start
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Free Diagnostic */}
              <div className="bg-white rounded-2xl p-8 border-2 border-grey-200">
                <div className="text-sm font-medium text-accent mb-2">Free</div>
                <h3 className="text-h3 font-display font-bold mb-4">Quick Diagnostic</h3>
                <p className="text-grey-600 mb-6">
                  3 minutes, 5 questions. Get a directional score and top 3 areas to fix.
                </p>
                <div className="text-4xl font-bold mb-6">₹0</div>
                <Link href="/audit" className="btn-secondary w-full justify-center mb-6">
                  Try Free Diagnostic
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <ul className="space-y-3">
                  {[
                    'Directional score (0-100)',
                    'Top 3 problem areas identified',
                    'High-level recommendations',
                    'No CRM access required',
                    'Results in 60 seconds'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Audit */}
              <div className="bg-primary text-white rounded-2xl p-8 border-2 border-accent relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="text-sm font-medium text-accent mb-2">Full Audit</div>
                <h3 className="text-h3 font-display font-bold mb-4">Complete Analysis</h3>
                <p className="text-grey-100 mb-6">
                  Deep-dive audit with CRM analysis, process review, and 30-day action plan.
                </p>
                <div className="text-4xl font-bold mb-2">₹2.5L</div>
                <div className="text-sm text-grey-400 mb-6">One-time • 2-week turnaround</div>
                <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover w-full justify-center mb-6">
                  Book Full Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <ul className="space-y-3">
                  {[
                    'Complete 50+ point analysis',
                    'CRM data extraction and analysis',
                    'Category-level scoring',
                    'Detailed gap analysis with severity',
                    'Prioritized 30-day action plan',
                    'Benchmark comparison',
                    '90-minute presentation of findings',
                    '30-day Q&A support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-grey-100">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-12 text-center">
              Common questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How is this different from a consulting engagement?',
                  answer: 'The audit is diagnostic only—we tell you what's broken and what to fix, but we don't fix it. If you want implementation, that's a separate engagement (Solutions). Many clients start with the audit to validate the problem before committing to a multi-month implementation.'
                },
                {
                  question: 'Do you need access to our CRM?',
                  answer: 'For the full audit, yes. We need read-only access to analyze data quality, pipeline health, and conversion rates. For the free diagnostic, no access is required—it's based on your answers to 5 questions.'
                },
                {
                  question: 'What if we don't have a CRM?',
                  answer: 'You still get value. We'll audit your process, tool usage, and capability gaps. The CRM section will highlight that as a critical gap and recommend next steps.'
                },
                {
                  question: 'Can we get a discount if we commit to implementation after?',
                  answer: 'Yes. If you sign a Solutions engagement within 30 days of receiving the audit, the audit fee is credited toward the first invoice.'
                },
                {
                  question: 'How long does the full audit take?',
                  answer: '2 weeks from access granted to final presentation. Week 1: data extraction and analysis. Week 2: report preparation and presentation.'
                },
                {
                  question: 'Is this specific to IT services companies?',
                  answer: 'The methodology works for any B2B company, but our benchmarks and recommendations are strongest for IT services, cybersecurity, and cloud/SaaS companies—that's where we have the most data.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-grey-50 rounded-xl p-6">
                  <h3 className="text-h5 font-display font-semibold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-grey-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">
              Ready to find your revenue leaks?
            </h2>
            <p className="text-xl text-grey-100 mb-8">
              Start with the free 3-minute diagnostic or book the full audit if you're ready for the complete analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Try Free Diagnostic
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Book Full Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
