import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, Users, Target, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event GTM Strategy | Zaash Solutions',
  description: 'Turn events from expense items into pipeline generators. Pre-event targeting, on-ground execution, and post-event nurture that actually converts.',
}

export default function EventGTMPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">Event GTM Strategy</h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Turn events from expensive business card collection into actual pipeline generation. Pre-event targeting, on-ground execution, and post-event nurture that converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover">
                Book a Strategy Call<ArrowRight className="w-5 h-5" />
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-h2 font-display font-bold mb-6">Why events don't generate pipeline</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'No pre-event targeting', description: 'You book the booth, show up, and hope the right people walk by. No targeted outreach to get meetings booked in advance.' },
              { title: 'No follow-up system', description: 'You collect 200 business cards, someone dumps them in the CRM, and no one follows up systematically.' },
              { title: 'Generic messaging', description: 'Your booth and materials could be for any company. Nothing specific, nothing memorable, no clear CTA.' },
              { title: 'Can't measure ROI', description: 'You spend ₹10-15L on an event and can't trace a single deal back to it. Pure faith-based marketing.' }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="text-h5 font-display font-semibold mb-3">{p.title}</h3>
                <p className="text-grey-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display font-bold mb-6">What we build with you</h2>
            <p className="text-xl text-grey-600">End-to-end event strategy that generates trackable pipeline.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: Target, title: 'Pre-Event Targeting', description: 'Identify who's attending, build target list, send pre-event campaigns to book meetings. Walk in with your calendar full.' },
                { icon: Calendar, title: 'On-Ground Execution', description: 'Booth strategy, qualifying questions, lead capture process, meeting protocols. Know who to spend time on.' },
                { icon: TrendingUp, title: 'Post-Event Nurture', description: '7-14 day follow-up sequences tailored by qualification level. Turn conversations into pipeline.' },
                { icon: Users, title: 'Event ROI Tracking', description: 'Track every lead from event to closed deal. Know which events generate pipeline, which are vanity.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
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
                {['Pre-event target list and campaign', 'Booth strategy and materials brief', 'Lead qualification framework', 'On-ground lead capture process', 'Post-event follow-up sequences', 'Event ROI tracking dashboard', 'Team training on execution', '60-day post-event support'].map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-grey-900">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-600 mb-4"><strong>Per event:</strong> 4-6 weeks</p>
                <p className="text-sm text-grey-600 mb-4"><strong>Investment:</strong> ₹3-5L per event</p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Discuss your needs<ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-6">Make your next event count</h2>
            <p className="text-xl text-grey-100 mb-8">
              Stop treating events as networking theater. Build the pre-event, on-ground, and post-event system that generates trackable pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book Strategy Call<ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
