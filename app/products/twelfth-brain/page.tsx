import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Brain, Zap, BarChart3, Shield, Clock, Target } from 'lucide-react'

export default function TwelfthBrainPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Products / Twelfth Brain</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Twelfth Brain
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Your AI-powered sales intelligence co-pilot</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Twelfth Brain sits on top of your CRM and sales data, surfaces the insights your team needs before every call, and tells you exactly which deals to focus on this week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Request Early Access
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            <div className="mt-6 inline-block bg-accent/10 border border-accent/30 rounded-lg px-4 py-2">
              <span className="text-accent text-sm font-medium">Currently in private beta — limited access available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problem */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">Your CRM has the data. Nobody reads it.</h2>
            <p className="text-grey-600 text-lg">
              The average B2B sales team has thousands of data points in their CRM — and uses almost none of it to make decisions. Twelfth Brain reads everything and surfaces only what matters, when it matters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-accent" />,
                title: '3 hours/week lost to CRM admin',
                description: 'Sales reps spend more time logging activities than selling. Twelfth Brain auto-captures and enriches data so your team can focus on conversations.'
              },
              {
                icon: <Target className="w-8 h-8 text-accent" />,
                title: 'Wrong deals get attention',
                description: 'Without intelligence, reps chase the loudest deals, not the most likely ones. Twelfth Brain scores every deal and tells you where to spend your time.'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-accent" />,
                title: 'Forecasts are guesswork',
                description: 'Pipeline reviews are based on gut feel and recency bias. Twelfth Brain builds forecasts from actual deal signals, not what your rep thinks will close.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-h5 font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-grey-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-4">What Twelfth Brain does</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-accent" />,
                title: 'Deal Intelligence',
                description: 'Every deal gets a health score based on engagement, stage duration, stakeholder coverage, and historical patterns. Know which deals are real before your pipeline review.',
                features: ['Engagement scoring', 'Stall detection', 'Risk flags', 'Win probability']
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: 'Pre-Call Briefs',
                description: 'Before every meeting, Twelfth Brain generates a 2-minute brief: what happened last time, what the buyer cares about, what to ask, and what objections to expect.',
                features: ['Meeting prep summaries', 'Stakeholder context', 'Suggested talk tracks', 'Objection alerts']
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-accent" />,
                title: 'Revenue Forecasting',
                description: 'AI-powered forecasts that go beyond stage-weighted pipeline. Twelfth Brain factors in deal velocity, rep history, and seasonal patterns to give you a number you can trust.',
                features: ['Commit vs. best case', 'Rep-level forecasts', 'Trend analysis', 'Scenario modelling']
              },
              {
                icon: <Shield className="w-8 h-8 text-accent" />,
                title: 'Activity Intelligence',
                description: 'Automatically capture emails, calls, and meetings. Enrich contacts with firmographic data. Flag accounts that have gone dark. Keep your CRM clean without manual effort.',
                features: ['Auto-capture activities', 'Contact enrichment', 'Engagement alerts', 'CRM hygiene scoring']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-h4 font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-grey-600 mb-6">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-4">Works with your existing stack</h2>
            <p className="text-grey-600 text-lg">Twelfth Brain connects to the tools you already use. No migration, no disruption.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HubSpot CRM', 'Salesforce', 'Zoho CRM', 'Pipedrive',
              'Gmail', 'Outlook', 'Google Meet', 'Zoom',
              'LinkedIn Sales Nav', 'Apollo.io', 'ZoomInfo', 'Slack'
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-grey-700 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-grey-600">Beta pricing available for early access customers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹8,000',
                period: '/user/month',
                description: 'For small sales teams getting started with intelligence',
                features: ['Up to 5 users', 'Deal scoring', 'Pre-call briefs', 'Basic forecasting', 'Email + calendar sync', 'HubSpot / Zoho integration'],
                cta: 'Get Started',
                highlight: false
              },
              {
                name: 'Growth',
                price: '₹15,000',
                period: '/user/month',
                description: 'For scaling teams that need deeper intelligence',
                features: ['Unlimited users', 'Advanced deal intelligence', 'AI forecasting', 'Custom dashboards', 'All CRM integrations', 'Dedicated onboarding', 'Slack alerts', 'Priority support'],
                cta: 'Request Access',
                highlight: true
              }
            ].map((plan, index) => (
              <div key={index} className={`rounded-2xl p-8 ${plan.highlight ? 'bg-primary text-white' : 'bg-grey-50'}`}>
                <div className="mb-6">
                  <h3 className={`text-h4 font-display font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-grey-900'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-accent' : 'text-grey-900'}`}>{plan.price}</span>
                    <span className={plan.highlight ? 'text-grey-300' : 'text-grey-500'}>{plan.period}</span>
                  </div>
                  <p className={plan.highlight ? 'text-grey-300' : 'text-grey-600'}>{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className={plan.highlight ? 'text-grey-100' : 'text-grey-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full justify-center flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${plan.highlight ? 'bg-accent hover:bg-accent-hover text-white' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Join the beta</h2>
            <p className="text-xl text-grey-100 mb-8">
              We are onboarding a limited number of B2B companies into the Twelfth Brain beta. Get early access, shape the product, and lock in beta pricing for 12 months.
            </p>
            <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
              Request Beta Access
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
