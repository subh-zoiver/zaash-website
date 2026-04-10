import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Brain, Users, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account-Based Intelligence | Zaash Solutions',
  description: 'Build target account lists, research and enrich profiles, and design multi-touch engagement campaigns for high-value B2B accounts.',
}

export default function AccountBasedIntelligencePage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Account-Based Intelligence
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Build target account lists, research and enrich profiles, and design multi-touch engagement campaigns. Focus your efforts on the 50-100 accounts that actually matter.
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
              Why account-based sales isn't working
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'No clear target account list', description: 'You say "enterprise clients" but haven't defined the actual 100 companies you should be going after. Everyone chases different logos.' },
                { title: 'Surface-level research', description: 'You know the company name and maybe the industry. You don't know their tech stack, recent initiatives, pain points, or buying committee.' },
                { title: 'Single-threaded outreach', description: 'You contact one person at the company, they don't respond, and the account goes cold. No multi-threading, no orchestrated campaign.' },
                { title: 'No account-level tracking', description: 'You can't see all activities across an account—who's been contacted, what's been sent, what stage each stakeholder is at.' }
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
            <h2 className="text-h2 font-display font-bold mb-6 text-center">What we build with you</h2>
            <p className="text-xl text-grey-600 text-center">
              A focused account-based engine that targets the right accounts with the right message at the right time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                { icon: Target, title: 'Target Account Selection', description: 'Define criteria, build the target 50-100 account list, prioritize by fit and intent. Know exactly where to focus.' },
                { icon: Brain, title: 'Deep Account Research', description: 'Research tech stack, recent news, hiring patterns, pain points, buying committee. Go in informed, not generic.' },
                { icon: Users, title: 'Multi-Threading Strategy', description: 'Identify 3-5 stakeholders per account, map the buying committee, design coordinated outreach across roles.' },
                { icon: Sparkles, title: 'Orchestrated Campaigns', description: 'Multi-channel, multi-touch campaigns tailored to each account. Email, LinkedIn, events, content—all coordinated.' }
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
                  'Target account list (50-100 companies)',
                  'Account research and enrichment',
                  'Buying committee mapping per account',
                  'Multi-touch campaign design',
                  'Account-level tracking dashboard',
                  'Weekly account review cadence',
                  'Team training on ABM execution',
                  '90-day campaign support'
                ].map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-900">{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Typical engagement:</strong> 10-12 weeks
                </p>
                <p className="text-sm text-grey-600 mb-4">
                  <strong>Investment:</strong> ₹8-12L (depends on account list size)
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
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select', description: 'We define your ICP, build the target account list, prioritize by fit and intent signals.' },
              { step: '02', title: 'Research', description: 'We research each account—tech stack, recent activity, buying committee, pain points.' },
              { step: '03', title: 'Campaign', description: 'We design multi-touch campaigns per account tier. Coordinate email, LinkedIn, content, events.' },
              { step: '04', title: 'Execute & Iterate', description: 'We launch campaigns, track engagement, run weekly account reviews, optimize based on what's working.' }
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
                'Your ACV is ₹20L+ and you need focused account targeting',
                'You're chasing too many accounts with no clear prioritization',
                'Your team contacts one person per account and gives up',
                'You want to break into strategic enterprise accounts',
                'You need coordinated campaigns, not random outreach',
                'Your sales cycle is 6-12 months and relationship-driven'
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
            <h2 className="text-h2 font-display font-bold mb-6">Let's build your ABM engine</h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a call with Ashish. We'll review your target account strategy, identify the accounts that matter, and design the multi-touch campaigns to break in.
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
