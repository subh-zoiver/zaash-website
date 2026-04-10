import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Search, Users, Target, Zap, BarChart3, Mail } from 'lucide-react'

export default function ProspectingEnginePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Products / Prospecting Engine</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Prospecting Engine
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">A full outbound pipeline, built and run for you</p>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              The Prospecting Engine is a done-for-you outbound system. We build the target list, write the sequences, set up the infrastructure, and run the campaigns — you get qualified conversations in your calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Build My Pipeline
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/audit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">Outbound is broken for most B2B companies</h2>
            <p className="text-grey-600 text-lg">
              You have tried cold email. You hired an SDR. You bought a tool. None of it produced consistent pipeline. The problem is not effort — it is that outbound requires a system, not a sprint.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-accent" />,
                title: 'Wrong target list',
                description: 'Most outbound fails at the list stage. Targeting too broad, wrong job titles, companies that are not a fit. Garbage in, garbage out — no matter how good the message.'
              },
              {
                icon: <Mail className="w-8 h-8 text-accent" />,
                title: 'Generic messaging',
                description: 'Copy-paste templates that every buyer has seen 50 times. No personalisation, no relevance, no reason to reply. Your email lands in the trash before it is read.'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-accent" />,
                title: 'No infrastructure',
                description: 'Sending cold email from your main domain destroys deliverability. Without proper setup — warmed domains, rotation, monitoring — your emails never reach the inbox.'
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

      {/* What we build */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-h2 font-display font-bold mb-6">Everything we build and run for you</h2>
              <p className="text-grey-600 text-lg mb-8">
                The Prospecting Engine is not a tool or a template. It is a complete outbound operation — strategy, infrastructure, execution, and optimisation — managed by our team so your team can focus on closing.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'ICP definition and target list',
                    description: 'We define your ideal customer profile precisely — industry, company size, tech stack, growth signals — and build a verified list of 500-2000 target accounts.'
                  },
                  {
                    title: 'Email infrastructure setup',
                    description: 'Dedicated sending domains, DNS configuration, inbox warming, and deliverability monitoring. Your emails reach inboxes, not spam folders.'
                  },
                  {
                    title: 'Multi-touch sequences',
                    description: 'Personalised email sequences (5-8 touches), LinkedIn connection and message sequences, and voicemail scripts — all written for your specific ICP.'
                  },
                  {
                    title: 'Campaign execution',
                    description: 'We run the campaigns, monitor reply rates, handle bounces, and manage the inbox. Interested replies get routed to you with context.'
                  },
                  {
                    title: 'Continuous optimisation',
                    description: 'Weekly A/B testing of subject lines, messaging, and targeting. Monthly strategy reviews to improve conversion at every stage.'
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
              <h3 className="text-h4 font-display font-bold mb-6">What you get each month</h3>
              <ul className="space-y-3 mb-8">
                {[
                  '500 new verified contacts added',
                  '3 active outbound sequences running',
                  '1,500-2,000 emails sent per month',
                  'LinkedIn outreach (100 connections/week)',
                  'All replies managed and routed',
                  'Weekly performance report',
                  'Monthly strategy call',
                  'A/B test results and recommendations',
                  'CRM sync (all activity logged)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-grey-100">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-accent/20">
                <p className="text-sm text-grey-400 mb-4">
                  <strong className="text-white">Typical results:</strong> 8-15 qualified conversations/month
                </p>
                <p className="text-sm text-grey-400 mb-6">
                  <strong className="text-white">Investment:</strong> ₹3L setup + ₹1.5L/month
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Build My Pipeline
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
            <h2 className="text-h2 font-display font-bold mb-6 text-center">From zero to pipeline in 3 weeks</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy', description: 'ICP workshop, value proposition refinement, competitive positioning. We define exactly who we are targeting and why they should reply.' },
              { step: '02', title: 'Build', description: 'Infrastructure setup, list building, sequence writing. Everything is ready before we send a single email.' },
              { step: '03', title: 'Launch', description: 'Campaigns go live. We monitor deliverability, open rates, and reply rates daily. Adjust in real time.' },
              { step: '04', title: 'Optimise', description: 'Weekly iteration based on data. What is working gets scaled. What is not gets replaced. Continuous improvement every month.' }
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

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Ready to build a real pipeline?</h2>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute strategy call. We will review your current outbound situation, define your ICP, and show you exactly what a Prospecting Engine would look like for your business.
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
