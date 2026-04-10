import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

export default function DesignCreativePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Industries / Design & Creative</span>
            </div>
            <div className="text-5xl mb-4">🎨</div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Design & Creative
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">Build a sales engine for your creative agency</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Creative agencies win on portfolio and reputation — until they need to grow beyond their network. Zaash helps design and creative firms build the systematic sales process that generates new business without compromising their creative identity.
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
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm text-white/80">of agency revenue from existing clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-sm text-white/80">more new business with systematic outbound</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-sm text-white/80">higher win rate with structured proposals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">The challenges we solve for Design & Creative</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><TrendingUp className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Feast or famine revenue cycles</h3>
              <p className="text-grey-600">Creative agencies are either overwhelmed with work or desperately searching for the next project. Without a consistent pipeline, you cannot plan capacity, hire confidently, or grow predictably.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Users className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Selling feels inauthentic</h3>
              <p className="text-grey-600">Creative founders built their business on craft, not sales. Outbound feels pushy. Cold email feels desperate. The result is passive marketing that generates occasional inbound but no systematic pipeline.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4"><Target className="w-8 h-8 text-accent" /></div>
              <h3 className="text-h5 font-display font-semibold mb-3">Competing on price with commoditised services</h3>
              <p className="text-grey-600">When clients cannot differentiate between agencies, they choose on price. Without a clear positioning and value narrative, you are always competing against cheaper alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">How Zaash works for Design & Creative companies</h2>
              <p className="text-grey-600 text-lg mb-8">
                We bring 19 years of B2B sales experience specifically to the challenges of Design & Creative. Every engagement starts with a diagnostic, then we build what your specific situation requires.
              </p>
              <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Agency positioning and differentiation strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Outbound prospecting to target brand and marketing buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Proposal and pitch process optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Retainer and recurring revenue model design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">CRM setup for project pipeline management</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-h4 font-display font-bold mb-4">Industry expertise</h3>
              <blockquote className="text-grey-100 text-lg italic mb-6 border-l-4 border-accent pl-4">
                "The best creative agencies are not the most talented — they are the ones that can articulate their value clearly, find the right clients systematically, and close without feeling like they are selling."
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
              Start with the free diagnostic. 3 minutes, 5 questions, and you get a directional score with the top 3 areas to fix first — specific to Design & Creative companies.
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
