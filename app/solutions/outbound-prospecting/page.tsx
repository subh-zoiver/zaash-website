import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Search } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outbound Prospecting & Pipeline Building | Zaash Solutions',
  description: 'Build the systematic prospecting engine you've never had. Lists, sequences, tracking, and weekly pipeline review for predictable B2B revenue growth.',
}

export default function OutboundProspectingPage() {
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
              Outbound Prospecting & Pipeline Building
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Build the systematic prospecting engine you've never had. Generate consistent pipeline through targeted outbound—lists, sequences, tracking, and weekly reviews.
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
              Why outbound isn't working for you
            </h2>
            <p className="text-xl text-grey-600 mb-8 text-center">
              It's not that you haven't tried. It's that you've never built it as a system.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'No consistent prospecting',
                  description: 'Your team prospects when they remember or when the pipeline is empty. There's no daily/weekly cadence. Outbound happens in panic mode, not as a system.'
                },
                {
                  title: 'Lists are random',
                  description: 'Someone exports 500 contacts from ZoomInfo with no targeting criteria. Half aren't even in your ICP. You're spraying and praying.'
                },
                {
                  title: 'No follow-up discipline',
                  description: 'First email sent, no reply, and it dies. No sequence. No second touch. You're leaving 80% of potential conversations on the table.'
                },
                {
                  title: 'Can't track what's working',
                  description: 'You don't know which lists convert, which messages get replies, or which rep is effective. Flying completely blind.'
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
              A repeatable outbound motion that generates pipeline every week—not just when you panic.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                {
                  icon: Search,
                  title: 'Target Account Lists',
                  description: 'Define your ICP, build segmented lists with clear targeting criteria, enrich with contact data. Know exactly who you're going after and why.'
                },
                {
                  icon: Users,
                  title: 'Multi-Touch Sequences',
                  description: 'Email, LinkedIn, phone—designed as a coordinated campaign, not random touches. 5-7 touch sequences with A/B tested messaging.'
                },
                {
                  icon: Target,
                  title: 'Daily Prospecting Cadence',
                  description: 'Set daily/weekly activity targets per rep. Build the muscle of consistent outbound. Track completion, not just results.'
                },
                {
                  icon: TrendingUp,
                  title: 'Weekly Pipeline Review',
                  description: 'Review what's working—list performance, message performance, rep performance. Iterate based on data, not gut feel.'
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
                  'ICP definition and target account criteria',
                  '3-5 segmented prospect lists (500-1000 contacts each)',
                  'Multi-touch sequences (email + LinkedIn + phone)',
                  'Prospecting playbook with templates',
                  'Activity tracking dashboard',
                  'Weekly review template and cadence',
                  'Rep training on outbound execution',
                  '60-day implementation support'
                ].map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-900">{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Typical engagement:</strong> 8-10 weeks
                </p>
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Investment:</strong> ₹6-10L (depends on list size and complexity)
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
                title: 'ICP Workshop',
                description: 'We define your ideal customer profile—company size, industry, geography, tech stack, pain points. Build the targeting criteria that actually convert.'
              },
              {
                step: '02',
                title: 'List Building',
                description: 'We build and enrich 3-5 segmented lists using your existing tools (Apollo, ZoomInfo) or our database. Each list has clear targeting rationale.'
              },
              {
                step: '03',
                title: 'Sequence Design',
                description: 'We design multi-touch sequences tailored to each segment. Write messaging, set timing, define handoff to sales. A/B test and iterate.'
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                description: 'We launch sequences, train your team, run the first 4 weekly reviews with you, and provide 60 days of active optimization support.'
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
                'Your entire pipeline comes from referrals or inbound',
                'You've purchased prospecting tools but don't use them consistently',
                'Your reps don't know who to target or how to prioritize',
                'Outbound is sporadic—only happens when pipeline is dry',
                'You can't predict next quarter's new opportunities',
                'You want predictable pipeline generation, not hope-based forecasting'
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
              Let's build your outbound engine
            </h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute call with Ashish. We'll walk through your ICP, identify your best targets, and outline what a systematic outbound motion would look like for your company.
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
