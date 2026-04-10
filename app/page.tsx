import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Target, Users, Zap, BarChart3, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-accent text-sm font-medium">The Sales Intelligence Layer</span>
              </div>
              <h1 className="text-hero font-display font-bold mb-6 text-balance">
                You've outgrown instinct-led selling
              </h1>
              <p className="text-xl text-grey-100 mb-8 max-w-xl">
                Zaash audits your sales stack, identifies revenue leaks, and builds the systematic engine your B2B company needs to scale beyond referrals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/audit" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                  Take the Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Book a Call
                </Link>
              </div>
              <p className="text-grey-400 text-sm mt-6">
                No credit card required • 3-minute diagnostic • Get your score instantly
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Dashboard Preview Mockup */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-grey-400 text-sm">Sales Readiness Score</span>
                    <span className="text-4xl font-bold text-accent">67/100</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-success rounded-full h-2" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-xs text-grey-400 w-20">CRM Health</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-warning rounded-full h-2" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-xs text-grey-400 w-20">Pipeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-danger rounded-full h-2" style={{ width: '32%' }}></div>
                      </div>
                      <span className="text-xs text-grey-400 w-20">Outbound</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-grey-400">Gaps Found</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">₹2.4Cr</div>
                      <div className="text-xs text-grey-400">At Risk</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">8</div>
                      <div className="text-xs text-grey-400">Quick Wins</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-info/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display font-bold mb-6">
              The referral ceiling is real
            </h2>
            <p className="text-xl text-grey-600">
              You've hit ₹10–50 crore on referrals and existing relationships. Your pipeline is a black box. Your tools are purchased but underused. Your team knows what to do but doesn't do it consistently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'No systematic outbound',
                description: "Every new client is a referral or an inbound lead. You've never built a repeatable prospecting motion.",
                impact: 'Growth capped at network size'
              },
              {
                title: 'CRM is a graveyard',
                description: "Data is incomplete, outdated, or flat wrong. Reports don't reflect reality. No one trusts the numbers.",
                impact: 'Decisions made on gut feel'
              },
              {
                title: 'Tools purchased, not used',
                description: 'HubSpot, ZoomInfo, Apollo—purchased with optimism, used inconsistently, producing no ROI.',
                impact: '₹8–12L/year wasted'
              },
              {
                title: 'Founder is the bottleneck',
                description: "Only you can close deals. Your team handles admin but not strategy. You can't scale yourself.",
                impact: 'Revenue tied to your time'
              },
              {
                title: 'No visibility into pipeline',
                description: "You don't know what's real vs. hopeful. Forecasts are guesses. Surprises happen every quarter.",
                impact: "Can't plan hiring or ops"
              },
              {
                title: 'Burned by agencies before',
                description: 'Promised lead gen, got junk. Promised brand awareness, got LinkedIn posts. Zero sales impact.',
                impact: 'Skeptical of all vendors'
              }
            ].map((problem, index) => (
              <div key={index} className="card">
                <h3 className="text-h5 font-display font-semibold mb-3 text-grey-900">
                  {problem.title}
                </h3>
                <p className="text-grey-600 mb-4">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-grey-200">
                  <span className="text-sm font-medium text-danger">Impact: {problem.impact}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-grey-600 mb-6">
              This isn't a tools problem. It's an intelligence problem.
            </p>
            <Link href="/audit" className="btn-primary text-lg">
              See where your revenue is leaking
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Zaash Does */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display font-bold mb-6">
              What Zaash actually does
            </h2>
            <p className="text-xl text-grey-600">
              We audit your existing stack, build the missing intelligence layer, and implement the systematic sales engine that makes every tool worth what you paid for it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-accent-subtle rounded-xl p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h4 font-display font-semibold mb-3">1. Audit</h3>
              <p className="text-grey-600 mb-4">
                We analyse your CRM, prospecting tools, call data, and process documentation. You get a score, gap analysis, and 30-day action plan.
              </p>
              <Link href="/products/sales-audit" className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-info/5 rounded-xl p-8">
              <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h4 font-display font-semibold mb-3">2. Implement</h3>
              <p className="text-grey-600 mb-4">
                We don't hand you a PDF. We build it with you—CRM cleanup, process design, pipeline architecture, training, and tool integration.
              </p>
              <Link href="/solutions/sales-process-gtm" className="text-info font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                See solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-success/5 rounded-xl p-8">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h4 font-display font-semibold mb-3">3. Optimize</h3>
              <p className="text-grey-600 mb-4">
                Ongoing intelligence—weekly scorecards, anomaly detection, deal risk scoring, and actionable insights that compound over time.
              </p>
              <Link href="/products/twelfth-brain" className="text-success font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Explore products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-h2 font-display font-bold mb-4">
                Not another tool. The layer that makes your tools work.
              </h3>
              <p className="text-xl text-grey-200 mb-8">
                Zaash doesn't replace HubSpot or Apollo. It tells you what to do with them. The intelligence layer your stack was missing.
              </p>
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover">
                Book a strategy call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display font-bold mb-6">
              Solutions built for your specific gaps
            </h2>
            <p className="text-xl text-grey-600">
              Every engagement is different. We start with the audit, then build what you actually need—not what's on our standard package list.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sales Process & GTM Architecture',
                description: 'Design your end-to-end sales motion from first touch to closed-won. Define stages, handoffs, ownership, and success metrics.',
                href: '/solutions/sales-process-gtm',
                icon: Target
              },
              {
                title: 'Outbound Prospecting & Pipeline Building',
                description: "Build the systematic prospecting engine you've never had. Lists, sequences, tracking, and weekly pipeline review.",
                href: '/solutions/outbound-prospecting',
                icon: Users
              },
              {
                title: 'CRM Efficiency & Implementation',
                description: 'Clean your CRM, set up automation, define required fields, and make your reports trustworthy again.',
                href: '/solutions/crm-efficiency',
                icon: Zap
              },
              {
                title: 'Account-Based Intelligence',
                description: 'Build target account lists, research and enrich profiles, and design multi-touch engagement campaigns.',
                href: '/solutions/account-based-intelligence',
                icon: Shield
              }
            ].map((solution, index) => (
              <Link key={index} href={solution.href} className="card hover:border-accent border border-transparent group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <solution.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h5 font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-grey-600 mb-4">
                      {solution.description}
                    </p>
                    <span className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/solutions/sales-process-gtm" className="btn-secondary">
              View all solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display font-bold mb-6">
              Built on 19 years of B2B sales reality
            </h2>
            <p className="text-xl text-grey-600">
              Zaash is led by Ashish Janiani, who has completed 52+ IT services projects and built MotivationalDiaries into the go-to sales consultancy for Indian IT firms. This is not theory. This is pattern recognition from hundreds of real sales engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">52+</div>
              <div className="text-grey-600">IT Services Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">19</div>
              <div className="text-grey-600">Years in B2B Sales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">11</div>
              <div className="text-grey-600">Years Running MotivationalDiaries</div>
            </div>
          </div>

          <div className="bg-grey-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-grey-700 italic mb-6">
                "Every founder I work with has the same four problems: they don't prospect systematically, their CRM is unreliable, they've been burned by agencies before, and they don't know which number to trust. Zaash solves all four."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-display font-bold text-2xl">AJ</span>
                </div>
                <div>
                  <div className="font-display font-semibold text-grey-900">Ashish Janiani</div>
                  <div className="text-grey-600">Founder & CEO, Zaash</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h1 font-display font-bold mb-6">
              Start with the free diagnostic
            </h2>
            <p className="text-xl text-grey-100 mb-8">
              3 minutes. 5 questions. You get a directional score and the top 3 areas to fix first. No sales call required (unless you want one).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Take the Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Book a Call Instead
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-grey-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Results in 60 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>B2B companies only</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
