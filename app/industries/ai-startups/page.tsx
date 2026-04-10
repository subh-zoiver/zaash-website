import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

export default function AiStartupsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Industries / AI & Tech Startups</span>
            </div>
            <div className="text-5xl mb-4">🤖</div>
            <h1 className="text-h1 font-display font-bold mb-6">
              AI & Tech Startups
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Build revenue before you run out of runway</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              AI startups have a product problem and a sales problem. The product is often ahead of the market. The sales motion is undefined. Zaash helps AI companies find their first 10 enterprise customers and build the process to scale.
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
              <div className="text-4xl font-bold mb-2">18mo</div>
              <div className="text-sm text-white/80">average runway for AI startups</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-sm text-white/80">of pilots never convert to paid</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-sm text-white/80">enterprise customers changes everything</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">The challenges we solve for AI & Tech Startups</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><TrendingUp className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">No repeatable sales motion</h3>
              <p className="text-grey-600">Every deal is different. Different buyer, different use case, different objections. Without a repeatable process, you cannot hire salespeople, cannot forecast, and cannot scale.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Users className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Selling to the wrong buyers</h3>
              <p className="text-grey-600">AI startups often sell to innovation teams and CDOs who are excited but cannot buy. The real buyers — operations, finance, sales leaders — need a different conversation entirely.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Target className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Pilot to paid conversion is broken</h3>
              <p className="text-grey-600">You run pilots that go well. Then the deal stalls. The champion loves it but cannot get budget. Without a structured commercial process, pilots become free work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">How Zaash works for AI & Tech Startups companies</h2>
              <p className="text-grey-600 text-lg mb-8">
                We bring 19 years of B2B sales experience specifically to the challenges of AI & Tech Startups. Every engagement starts with a diagnostic, then we build what your specific situation requires.
              </p>
              <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">ICP definition and buyer persona mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Sales process design for AI/SaaS deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Pilot-to-paid conversion framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Enterprise procurement navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Outbound prospecting to target enterprise accounts</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-h4 font-display font-bold mb-4">Industry expertise</h3>
              <blockquote className="text-grey-100 text-lg italic mb-6 border-l-4 border-accent pl-4">
                "The best AI product does not win. The company with the clearest value proposition and the most systematic sales process wins. Build the sales engine before you need it."
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
              Start with the free diagnostic. 3 minutes, 5 questions, and you get a directional score with the top 3 areas to fix first — specific to AI & Tech Startups companies.
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
