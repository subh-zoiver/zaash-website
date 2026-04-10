import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-display font-bold mb-6">
              Built by people who've lived the B2B sales grind
            </h1>
            <p className="text-xl text-grey-100">
              Zaash exists because we've seen the same revenue ceiling hit every founder in the ₹10-50 crore range. This isn't theory. This is pattern recognition from hundreds of real engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-8 text-center">
              Why Zaash exists
            </h2>
            <div className="prose prose-lg max-w-none text-grey-700 space-y-6">
              <p>
                Every founder in the Indian IT services space hits the same ceiling: ₹10-50 crore, built entirely on referrals and existing relationships. They know they need outbound. They know their CRM is unreliable. They know their tools are underused. But they don't know where to start—and they've been burned by agencies before.
              </p>
              <p>
                Zaash was founded to solve this specific problem. Not "sales enablement for all B2B companies." Not "CRM consulting for everyone." The systematic sales engine that Indian IT services founders need when they've outgrown instinct-led selling.
              </p>
              <p>
                We start with an audit because most companies don't know what they don't know. We implement solutions because PDFs don't drive change. And we build intelligence into the process because one-time fixes don't compound—ongoing insights do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <h2 className="text-h2 font-display font-bold mb-12 text-center">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Ashish Janiani */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-display font-bold text-5xl">AJ</span>
              </div>
              <h3 className="text-h3 font-display font-bold text-center mb-2">
                Ashish Janiani
              </h3>
              <p className="text-accent text-center mb-6">Founder & CEO</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">19 years in B2B sales</div>
                    <div className="text-sm text-grey-600">Built and scaled sales teams across IT services</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">52+ IT projects completed</div>
                    <div className="text-sm text-grey-600">Direct experience with the Indian IT services GTM reality</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">11 years running MotivationalDiaries</div>
                    <div className="text-sm text-grey-600">The go-to sales consultancy for Indian IT firms (morphing into Zaash)</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-grey-200">
                <p className="text-grey-600 text-sm italic">
                  "Every founder I work with has the same four problems. Zaash solves all four—not with theory, but with a process that's been tested across 52 real engagements."
                </p>
              </div>
            </div>

            {/* Subh Mukherjee */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-32 h-32 bg-info rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-display font-bold text-5xl">SM</span>
              </div>
              <h3 className="text-h3 font-display font-bold text-center mb-2">
                Subh Mukherjee
              </h3>
              <p className="text-info text-center mb-6">Founder & Chairman</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-info flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">Senior tech & product professional</div>
                    <div className="text-sm text-grey-600">Deep AI and enterprise systems background</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-info flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">Product & platform thinking</div>
                    <div className="text-sm text-grey-600">Building the intelligence layer and data flywheel</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-info flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-grey-900">Strategic advisor network</div>
                    <div className="text-sm text-grey-600">Brings US market perspective and product discipline</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-grey-200">
                <p className="text-grey-600 text-sm italic">
                  "The B2B sales stack is broken—fragmented, tactical, intelligence-light. Zaash is the missing layer that tells you what to do with your tools, not just automates tasks."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-grey-600 mb-4">
              <strong>Note:</strong> Full founder bios, photos, and team member details will be added once provided.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold mb-12 text-center">
              What we believe
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Vertical beats horizontal',
                  description: 'We serve Indian IT services companies in the ₹10-50 crore range. Not "all B2B companies." Specificity is the credibility signal.'
                },
                {
                  title: 'Intelligence over automation',
                  description: 'Your tools don't need more features. You need to know what to do with them. The intelligence layer is the missing piece.'
                },
                {
                  title: 'Transparency is a feature',
                  description: 'We show you what we do, how we do it, and what you get. No vague promises. No "trust us." Just clarity.'
                },
                {
                  title: 'Implementation over advice',
                  description: 'PDFs don't drive change. We build it with you—CRM cleanup, process design, playbooks, training, and ongoing support.'
                },
                {
                  title: 'Pattern recognition over theory',
                  description: 'This is not consulting from an MBA textbook. This is synthesis of 52+ real IT services engagements.'
                },
                {
                  title: 'Data compounds',
                  description: 'Every audit builds our benchmark data. Every engagement improves the models. The platform gets smarter over time.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-grey-50 rounded-xl p-6">
                  <h3 className="text-h5 font-display font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-grey-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-8">
              Partner entities
            </h2>
            <p className="text-xl text-grey-600 mb-12">
              Zaash operates with two strategic partner companies to deliver complete solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-h4 font-display font-bold mb-4">
                  Tisselor
                </h3>
                <p className="text-grey-600 mb-4">
                  Our sister concern that delivers the Branding and Thought Leadership solution. When your sales process needs to be supported by credible positioning and content, Tisselor builds it.
                </p>
                <a 
                  href="https://tisselor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Visit Tisselor
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h3 className="text-h4 font-display font-bold mb-4">
                  Twelfth Brain
                </h3>
                <p className="text-grey-600 mb-4">
                  Our partner collaboration product featured in Zaash Products. Designed for distributed teams who need shared context without constant meetings.
                </p>
                <a 
                  href="https://twelfthbrain.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Visit Twelfth Brain
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">
              Ready to move beyond referrals?
            </h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a call with Ashish or Subh. No sales pitch—just an honest conversation about where you are and what it would take to build a systematic sales engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book a Call
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
