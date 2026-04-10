import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, RefreshCw, Clock, Target, Zap, BarChart3, Bell } from 'lucide-react'

export default function FollowUpSystemPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Products / Follow-Up System</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              The Follow-Up System
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Never let a deal go cold again</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              80% of B2B sales require 5+ follow-ups. Most reps stop at 2. The Follow-Up System automates the right touchpoints at the right time, so your pipeline stays warm without manual effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Get the System
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                See a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '80%', label: 'of deals need 5+ follow-ups' },
              { stat: '44%', label: 'of reps give up after 1 follow-up' },
              { stat: '3x', label: 'more revenue from systematic follow-up' },
              { stat: '2hrs', label: 'saved per rep per day' }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">The follow-up problem is universal</h2>
            <p className="text-grey-600 text-lg">
              Your team is not lazy. They are overwhelmed. When you have 50 active deals, knowing who to follow up with, when, and what to say is a full-time job. Most of it does not happen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-accent" />,
                title: 'Deals go cold silently',
                description: 'A prospect goes quiet after a great demo. Your rep means to follow up but gets pulled into other things. Three weeks later, the deal is dead and nobody noticed.'
              },
              {
                icon: <Target className="w-8 h-8 text-accent" />,
                title: 'No system, just memory',
                description: 'Follow-up timing is based on what the rep remembers, not what the data says. Inconsistent, unpredictable, and completely dependent on individual habits.'
              },
              {
                icon: <Bell className="w-8 h-8 text-accent" />,
                title: 'Generic messages kill deals',
                description: '"Just checking in" is the most common follow-up message and the least effective. Buyers ignore it. The Follow-Up System gives your team context-aware messages that get replies.'
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

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">How the system works</h2>
              <p className="text-grey-600 text-lg mb-8">
                The Follow-Up System combines automation, AI-generated message suggestions, and smart scheduling to make sure every deal gets the attention it deserves — without adding to your team's workload.
              </p>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Smart trigger detection',
                    description: 'The system monitors your CRM for deals that have gone quiet, proposals that have not been opened, and meetings that ended without a next step. It flags them automatically.'
                  },
                  {
                    step: '02',
                    title: 'Context-aware message suggestions',
                    description: 'For each follow-up, the system suggests a message based on the deal stage, last interaction, and what the buyer cares about. Your rep personalises and sends in 30 seconds.'
                  },
                  {
                    step: '03',
                    title: 'Multi-channel sequences',
                    description: 'Email, LinkedIn, WhatsApp, and phone — the system orchestrates the right channel at the right time based on where the buyer has been most responsive.'
                  },
                  {
                    step: '04',
                    title: 'Escalation and handoff',
                    description: 'If a deal stalls despite follow-up, the system escalates to the manager. If a prospect re-engages, it alerts the rep immediately so they can strike while the iron is hot.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-3xl font-bold text-accent flex-shrink-0 w-12">{step.step}</div>
                    <div>
                      <h3 className="text-h5 font-display font-semibold mb-2">{step.title}</h3>
                      <p className="text-grey-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-h4 font-display font-bold mb-6">What you get</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Follow-up sequence templates (by stage)',
                  'CRM integration and trigger setup',
                  'AI message suggestion engine',
                  'Multi-channel orchestration (email, LinkedIn, WhatsApp)',
                  'Deal health dashboard',
                  'Stall alerts and escalation rules',
                  'Re-engagement detection',
                  'Rep performance analytics',
                  '30-day onboarding and training'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-100">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-accent/20">
                <p className="text-sm text-grey-400 mb-4">
                  <strong className="text-white">Setup time:</strong> 2 weeks
                </p>
                <p className="text-sm text-grey-400 mb-6">
                  <strong className="text-white">Investment:</strong> ₹2L setup + ₹50K/month
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get the Follow-Up System
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-4">What clients see in 60 days</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '35%', label: 'increase in pipeline conversion', description: 'More deals move from proposal to close when follow-up is systematic' },
              { metric: '60%', label: 'reduction in deals going cold', description: 'The system catches stalled deals before they die' },
              { metric: '2hrs', label: 'saved per rep per day', description: 'Less time deciding what to do, more time selling' }
            ].map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="text-5xl font-bold text-accent mb-2">{result.metric}</div>
                <div className="text-h5 font-semibold mb-2">{result.label}</div>
                <p className="text-grey-600 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Stop letting deals go cold</h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute call. We will audit your current follow-up process, show you where deals are dying, and walk you through exactly how the system would work for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book a Demo
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
