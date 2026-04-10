import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

export default function BfsiPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Industries / BFSI</span>
            </div>
            <div className="text-5xl mb-4">🏦</div>
            <h1 className="text-h1 font-display font-bold mb-6">
              BFSI
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Navigate complex financial services procurement</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Selling to banks, insurance companies, and financial institutions requires patience, compliance awareness, and multi-stakeholder navigation. Zaash helps BFSI-focused companies build the sales process that works in this environment.
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
              <div className="text-4xl font-bold mb-2">9-18</div>
              <div className="text-sm text-white/80">month average BFSI sales cycle</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8-12</div>
              <div className="text-sm text-white/80">stakeholders in typical deal</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2x</div>
              <div className="text-sm text-white/80">faster close with structured process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">The challenges we solve for BFSI</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><TrendingUp className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Procurement takes forever</h3>
              <p className="text-grey-600">BFSI procurement involves legal, compliance, IT security, and multiple business stakeholders. Deals that should close in 3 months take 12. Without a process to manage this, you lose momentum and eventually the deal.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Users className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Compliance requirements kill deals</h3>
              <p className="text-grey-600">Financial institutions have strict vendor requirements — data localisation, security certifications, audit rights. Deals die when these requirements surface late. You need to surface and address them early.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Target className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Relationship-dependent and non-scalable</h3>
              <p className="text-grey-600">BFSI deals are won through relationships, but relationships take years to build. Without a systematic way to develop new relationships at scale, growth is slow and unpredictable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">How Zaash works for BFSI companies</h2>
              <p className="text-grey-600 text-lg mb-8">
                We bring 19 years of B2B sales experience specifically to the challenges of BFSI. Every engagement starts with a diagnostic, then we build what your specific situation requires.
              </p>
              <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">BFSI procurement navigation playbook</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Compliance and security questionnaire management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Multi-stakeholder deal management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Relationship mapping and executive engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Pipeline management for long BFSI cycles</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-h4 font-display font-bold mb-4">Industry expertise</h3>
              <blockquote className="text-grey-100 text-lg italic mb-6 border-l-4 border-accent pl-4">
                "BFSI deals are won in the preparation phase, not the pitch. The companies that win are the ones that have done the compliance homework, mapped the stakeholders, and built the relationships before the RFP drops."
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
              Start with the free diagnostic. 3 minutes, 5 questions, and you get a directional score with the top 3 areas to fix first — specific to BFSI companies.
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
