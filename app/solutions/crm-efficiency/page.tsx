import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Database, BarChart3, Settings, RefreshCw } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM Efficiency & Implementation | Zaash Solutions',
  description: 'Clean your CRM, set up automation, define required fields, and make your reports trustworthy again. Turn your CRM from a graveyard into a revenue intelligence engine.',
}

export default function CRMEfficiencyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              CRM Efficiency & Implementation
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Clean your CRM, set up automation, define required fields, and make your reports trustworthy again. Turn your database from a graveyard into a revenue intelligence engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Start with Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              Why your CRM is unreliable
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Data is incomplete or wrong',
                  description: "Half your contacts have no email. Companies missing revenue data. Deals with no close date. Your team doesn't enter what matters."
                },
                {
                  title: 'Too many duplicates',
                  description: 'Same contact 3 times, same company 5 times, all with different spellings. No one knows which record is real.'
                },
                {
                  title: 'No one trusts the reports',
                  description: "Pipeline says ₹5Cr but you know it's actually ₹2Cr of real deals. Forecasts are fiction. Decisions made on gut feel instead."
                },
                {
                  title: 'No automation or workflows',
                  description: "Everything is manual. Tasks don't auto-create. Emails don't auto-send. Your ₹50L/year CRM is being used as a glorified Excel sheet."
                }
              ].map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-grey-200">
                  <h3 className="text-h5 font-display font-semibold mb-3">{problem.title}</h3>
                  <p className="text-grey-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              What we build with you
            </h2>
            <p className="text-xl text-grey-600 text-center">
              A clean, automated CRM that your team actually uses and you can actually trust.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                {
                  icon: Database,
                  title: 'Data Cleanup & Deduplication',
                  description: 'We merge duplicates, standardize fields, fill gaps with enrichment data, and archive dead records. One source of truth.'
                },
                {
                  icon: Settings,
                  title: 'Field Configuration & Validation',
                  description: 'Define required fields, set up picklists, create validation rules. Make it impossible to create junk records.'
                },
                {
                  icon: RefreshCw,
                  title: 'Automation & Workflows',
                  description: 'Auto-create tasks, auto-send emails, auto-update fields based on triggers. Let the CRM do the admin work.'
                },
                {
                  icon: BarChart3,
                  title: 'Reports & Dashboards',
                  description: 'Build the 5-7 reports you actually need—pipeline health, conversion rates, rep performance, forecast accuracy. Real data, real decisions.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-grey-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent-subtle rounded-2xl p-8">
              <h3 className="text-h4 font-display font-semibold mb-6">What you get</h3>
              <ul className="space-y-4">
                {[
                  'Complete data cleanup (duplicates, gaps, errors)',
                  'Required field configuration',
                  'Validation rules to prevent junk data',
                  'Automation workflows (tasks, emails, updates)',
                  'Custom reports and dashboards',
                  'Team training on new setup',
                  'Data governance playbook',
                  '30-day post-launch support'
                ].map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-900">{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Typical engagement:</strong> 6-8 weeks
                </p>
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Investment:</strong> ₹4-7L (depends on data volume and complexity)
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Discuss your needs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">How we work</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', description: 'We audit your current CRM—data quality, field usage, automation gaps, report accuracy. Quantify the mess.' },
              { step: '02', title: 'Clean', description: 'We dedupe, merge, enrich, and archive. Get your data clean before configuring anything new.' },
              { step: '03', title: 'Configure', description: 'We set up fields, validation, automation, and reports. Make the CRM work how it should.' },
              { step: '04', title: 'Train & Support', description: 'We train your team, run the first month with you, and provide 30 days of active support as everyone adjusts.' }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="text-4xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-h5 font-display font-semibold mb-3">{phase.title}</h3>
                <p className="text-grey-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">This is for you if</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Your pipeline reports don't match reality",
                'You have duplicate contacts and companies everywhere',
                'Required fields are empty on most records',
                "You can't forecast because the data is unreliable",
                'Your team hates updating the CRM',
                'You paid for a CRM but use it like Excel'
              ].map((criteria, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-grey-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Let's fix your CRM</h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute call with Ashish. We'll review your current CRM situation, identify the quick wins, and outline what it would take to make your data trustworthy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Take Free Audit First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
