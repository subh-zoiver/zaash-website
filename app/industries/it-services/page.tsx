import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

export default function ItServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Industries / IT Services & Software</span>
            </div>
            <div className="text-5xl mb-4">💻</div>
            <h1 className="text-h1 font-display font-bold mb-6">
              IT Services & Software
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Win more enterprise deals with a systematic sales engine</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              IT services firms win on relationships and reputation — until they need to scale. Zaash helps IT companies build the outbound motion, CRM discipline, and pipeline visibility needed to grow beyond referrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Talk to a Specialist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Take Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
              <div className="text-4xl font-bold mb-2">52+</div>
              <div className="text-sm text-white/80">IT services projects completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">19</div>
              <div className="text-sm text-white/80">years in B2B tech sales</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50Cr+</div>
              <div className="text-sm text-white/80">in pipeline built for IT firms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">The challenges we solve for IT Services & Software</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><TrendingUp className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Long sales cycles with no visibility</h3>
              <p className="text-grey-600">IT services deals take 3-9 months. Without a structured pipeline, you cannot tell what is real, what is stalled, and what needs attention this week.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Users className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Founder-led sales that cannot scale</h3>
              <p className="text-grey-600">The founder closes every deal because only they understand the full capability. Deals stall when they are not in the room. The business cannot grow past the founder's bandwidth.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Target className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">No repeatable prospecting motion</h3>
              <p className="text-grey-600">New business comes from referrals and existing clients expanding. There is no systematic way to reach new logos, which means growth is unpredictable and capped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">How Zaash works for IT Services & Software companies</h2>
              <p className="text-grey-600 text-lg mb-8">
                We bring 19 years of B2B sales experience specifically to the challenges of IT Services & Software. Every engagement starts with a diagnostic, then we build what your specific situation requires.
              </p>
              <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Sales process design for long IT services cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">CRM setup for multi-stakeholder enterprise deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Outbound prospecting to target enterprise accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Account-based intelligence for key accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Pipeline visibility and forecasting dashboards</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-h4 font-display font-bold mb-4">Industry expertise</h3>
              <blockquote className="text-grey-100 text-lg italic mb-6 border-l-4 border-accent pl-4">
                "IT services is a relationship business — but relationships alone cannot build a scalable company. You need a system that generates new relationships consistently."
              </blockquote>
              <div className="border-t border-accent/20 pt-6">
                <p className="text-grey-300 text-sm mb-2">Ashish Janiani</p>
                <p className="text-grey-400 text-sm">Founder & CEO, Zaash — 19 years in B2B sales</p>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Talk to Ashish
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Ready to build a systematic sales engine?</h2>
            <p className="text-xl text-grey-100 mb-8">
              Start with the free diagnostic. 3 minutes, 5 questions, and you get a directional score with the top 3 areas to fix first — specific to IT Services & Software companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Take Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
