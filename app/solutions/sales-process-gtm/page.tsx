import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, FileText, Users, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Process & GTM Architecture | Zaash Solutions',
  description: 'Design your end-to-end B2B sales motion from first touch to closed-won. Define stages, handoffs, ownership, and success metrics with Zaash.',
}

export default function SalesProcessGTMPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Sales Process & GTM Architecture
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Design your end-to-end sales motion from first touch to closed-won. Define stages, handoffs, ownership, and success metrics that actually get followed.
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

      {/* The Problem */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              When founders say "we need a sales process"
            </h2>
            <p className="text-xl text-grey-600 mb-8 text-center">
              They usually mean one of four things:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'No one knows what stage means what',
                  description: 'Is "Proposal Sent" before or after "Demo Completed"? Different team members use different definitions. Your pipeline is a mess.'
                },
                {
                  title: 'Handoffs are where deals die',
                  description: 'Lead gen hands it to sales, sales hands it to solutions, and somewhere in between the prospect ghosts. No one owns the gap.'
                },
                {
                  title: 'The founder still closes everything',
                  description: "Your sales team qualifies and demos, but you step in for every negotiation. You're the bottleneck to growth."
                },
                {
                  title: "No idea what's working",
                  description: "You run campaigns, do events, post on LinkedIn—but can't trace a single closed deal back to any specific activity."
                }
              ].map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-grey-200">
                  <h3 className="text-h5 font-display font-semibold mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-grey-600">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              What we build with you
            </h2>
            <p className="text-xl text-grey-600 text-center">
              Not a PDF deck you file away. A living sales engine your team actually uses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: 'Stage Definition & Exit Criteria',
                  description: 'Clear definition of each stage in your pipeline—what qualifies a lead to move forward, what disqualifies them, and who owns the decision. No more "stuck in demo" limbo.'
                },
                {
                  icon: Users,
                  title: 'Role & Responsibility Mapping',
                  description: 'Who owns what at each stage. Who qualifies, who demos, who proposes, who closes. Handoff protocols that prevent deals from falling through the cracks.'
                },
                {
                  icon: FileText,
                  title: 'Sales Playbooks & Templates',
                  description: 'Qualifying questions, discovery frameworks, proposal templates, objection handling scripts. Everything your team needs to execute without you.'
                },
                {
                  icon: TrendingUp,
                  title: 'Success Metrics & Dashboards',
                  description: "What gets measured gets managed. Conversion rates by stage, time in stage, rep performance, and leading indicators that predict next quarter's revenue."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-display font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-grey-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent-subtle rounded-2xl p-8">
              <h3 className="text-h4 font-display font-semibold mb-6">What you get</h3>
              <ul className="space-y-4">
                {[
                  'Documented sales process with stage definitions',
                  'CRM configured to match your actual process',
                  'Playbooks for each stage of the funnel',
                  'Weekly pipeline review template',
                  'Success metrics dashboard',
                  'Team training on the new process',
                  '30-day implementation support'
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
                  <strong>Investment:</strong> ₹5-8L (depends on team size and complexity)
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

      {/* How It Works */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              How we work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: "We shadow your team, review your current process (if documented), and interview key stakeholders to understand what's actually happening vs. what should happen."
              },
              {
                step: '02',
                title: 'Design',
                description: 'We design your new sales process—stages, criteria, handoffs, metrics. You review, we iterate, we finalize together.'
              },
              {
                step: '03',
                title: 'Build',
                description: 'We configure your CRM, create the playbooks, set up the dashboards, and prepare the training materials.'
              },
              {
                step: '04',
                title: 'Deploy',
                description: 'We train your team, run the first two pipeline reviews with you, and provide 30 days of active support as everyone gets up to speed.'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="text-4xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-h5 font-display font-semibold mb-3">
                  {phase.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">
              This is for you if
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Your pipeline is a black box—you can't predict next quarter's revenue",
                'Deals get stuck in stages for months with no clear owner',
                "You've hired sales reps but they still need you to close",
                'Your team asks "what do I do next?" more often than they should',
                "You run reports but don't trust the data",
                "You want to scale beyond founder-led sales but don't know where to start"
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

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">
              Let's design your sales engine
            </h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute call with Ashish. We'll walk through your current state, identify the gaps, and outline what a systematic sales process would look like for your company.
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
