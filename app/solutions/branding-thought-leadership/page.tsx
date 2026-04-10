import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Mic, FileText, Users, TrendingUp, Star, Zap } from 'lucide-react'

export default function BrandingThoughtLeadershipPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions / Branding & Thought Leadership</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Turn your expertise into inbound pipeline
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Most B2B founders have 19 years of hard-won knowledge that nobody knows about. We help you systematically publish that expertise so buyers come to you — before they talk to anyone else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Start Building Authority
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Take Free Audit First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">Your buyers are Googling. Are they finding you?</h2>
            <p className="text-grey-600 text-lg">
              In B2B services, trust is the product. Buyers shortlist vendors they have already heard of. If your name does not appear in their research phase, you are not in the consideration set — no matter how good you are.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8 text-accent" />,
                title: 'No content presence',
                description: 'You have deep expertise but no systematic way to publish it. Your LinkedIn is quiet. Your website has no blog. Buyers cannot find your point of view.'
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: 'Referrals are random',
                description: 'You get clients through word of mouth, but you cannot predict when or from whom. Thought leadership makes referrals more frequent and more qualified.'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: 'Competitors look bigger',
                description: 'Firms with less experience but more content look more credible online. Publishing consistently levels the playing field and often tips it in your favour.'
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

      {/* What we do */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">What we build for you</h2>
              <p className="text-grey-600 text-lg mb-8">
                We do not write generic content. We extract your actual expertise — your frameworks, your war stories, your unpopular opinions — and turn them into a content engine that runs consistently.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Founder positioning strategy',
                    description: 'Define your unique point of view, target audience, and the one thing you want to be known for in your market.'
                  },
                  {
                    title: 'LinkedIn content system',
                    description: 'Weekly posts, carousels, and long-form articles that build your following and generate inbound DMs from ideal clients.'
                  },
                  {
                    title: 'Case study library',
                    description: 'Turn your past client work into compelling proof — structured stories that handle objections before the sales call.'
                  },
                  {
                    title: 'Email newsletter',
                    description: 'A regular newsletter to your existing network that keeps you top of mind and generates referrals on autopilot.'
                  },
                  {
                    title: 'Speaking & podcast strategy',
                    description: 'Identify the right stages and podcasts for your audience, and prepare you to show up with authority.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-grey-900 mb-1">{item.title}</h4>
                      <p className="text-grey-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-h4 font-display font-bold mb-6">Engagement deliverables</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Founder positioning document',
                  'Content pillar framework (5 core topics)',
                  '3-month LinkedIn content calendar',
                  '12 LinkedIn posts (written + designed)',
                  '4 long-form articles or newsletters',
                  '3 client case studies (written)',
                  'Email newsletter template + first 4 issues',
                  'Podcast pitch list (20 relevant shows)',
                  'Monthly performance review and iteration'
                ].map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-100">{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-400 mb-4">
                  <strong className="text-white">Typical engagement:</strong> 3-month retainer, then month-to-month
                </p>
                <p className="text-sm text-grey-400 mb-6">
                  <strong className="text-white">Investment:</strong> Starting at ₹1.5L/month
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Discuss your positioning
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 font-display font-bold mb-6 text-center">How we work</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Extract', description: 'Deep-dive interviews with you to extract your frameworks, opinions, and stories. We find the gold you did not know you had.' },
              { step: '02', title: 'Position', description: 'Define your unique angle, target audience, and content pillars. Build the strategy before writing a single word.' },
              { step: '03', title: 'Publish', description: 'We write, design, and schedule. You review and approve. Content goes out consistently without eating your calendar.' },
              { step: '04', title: 'Optimise', description: 'Monthly review of what is working. Double down on high-performing formats. Adjust based on audience response.' }
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

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-4">What founders typically see</h2>
            <p className="text-grey-600">Within 90 days of consistent publishing</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '3-5x', label: 'LinkedIn profile views', description: 'More decision-makers visiting your profile organically' },
              { metric: '2-4', label: 'Inbound enquiries/month', description: 'Warm leads who already know your point of view' },
              { metric: '40%', label: 'Shorter sales cycles', description: 'Buyers who follow you close faster with fewer objections' }
            ].map((result, index) => (
              <div key={index} className="text-center bg-grey-50 rounded-xl p-8">
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
            <h2 className="text-h2 font-display font-bold mb-6">Start building your authority</h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute positioning call. We will identify your unique angle, the content formats that suit your style, and what a 90-day publishing plan looks like for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book Positioning Call
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
