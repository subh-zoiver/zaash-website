#!/usr/bin/env node

/**
 * ZAASH WEBSITE - COMPLETE PAGE GENERATOR
 * Run this script to generate all remaining placeholder pages
 * 
 * Usage: node generate-remaining-pages.js
 */

const fs = require('fs');
const path = require('path');

// Ensure we're in the right directory
const baseDir = path.join(__dirname, 'app');

// ==================================================================
// REMAINING SOLUTION PAGES (2 more)
// ==================================================================

const brandingThoughtLeadership = `import Link from 'next/link'
import { ArrowRight, CheckCircle, Newspaper, Users, TrendingUp, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Thought Leadership | Zaash Solutions',
  description: 'Build credible positioning and content that supports your sales process. Delivered by our sister concern Tisselor.',
}

export default function BrandingThoughtLeadershipPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Solutions • Partner: Tisselor</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-6">
              Branding & Thought Leadership
            </h1>
            <p className="text-xl text-grey-100 mb-8 max-w-2xl">
              Build credible positioning and content that supports your sales process. When your prospects research you, they find substance—not generic services pages. Delivered by our sister concern Tisselor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover">
                Book a Strategy Call<ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://tisselor.com" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Visit Tisselor
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-h2 font-display font-bold mb-6">Why branding matters for B2B sales</h2>
            <p className="text-xl text-grey-600">Most IT services companies confuse branding with sales. Tisselor builds the positioning layer that makes your sales conversations credible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Prospects research you before responding', description: 'They Google your company, check your LinkedIn, read your website. If it's generic or outdated, you've lost the deal before the call.' },
              { title: 'No differentiation', description: 'Your website says the same thing as 500 other IT services companies. "Quality solutions. Global delivery. Client-first." Meaningless.' },
              { title: 'No thought leadership', description: 'Your team has expertise but no one knows. No LinkedIn presence, no published content, no POV on industry trends.' },
              { title: 'Sales team lacks credibility assets', description: 'Your reps have nothing to share. No case studies, no insights, no proof points. Just generic proposals.' }
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
            <h2 className="text-h2 font-display font-bold mb-6">What Tisselor builds with you</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: Award, title: 'Positioning & Messaging', description: 'Define what you actually do differently. Build messaging that's specific, not generic corporate speak.' },
                { icon: Newspaper, title: 'Content & Thought Leadership', description: 'LinkedIn content, case studies, insights, POV pieces. Build credibility through published expertise.' },
                { icon: Users, title: 'Founder Brand Building', description: 'Position your founders as industry voices. LinkedIn strategy, speaking opportunities, media presence.' },
                { icon: TrendingUp, title: 'Sales Enablement Content', description: 'Case studies, one-pagers, vertical insights—content your sales team can actually use in conversations.' }
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
                {['Positioning strategy and messaging framework', 'Website content refresh', 'LinkedIn content calendar (3 months)', '2-3 published case studies', 'Founder thought leadership strategy', 'Sales enablement assets', 'Content templates and guidelines', 'Ongoing content support (optional)'].map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-grey-900">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-sm text-grey-600 mb-4"><strong>Typical engagement:</strong> 10-12 weeks</p>
                <p className="text-sm text-grey-600 mb-4"><strong>Investment:</strong> ₹8-15L</p>
                <p className="text-sm text-grey-600 mb-6"><em>Delivered by Tisselor, Zaash's sister concern</em></p>
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
            <h2 className="text-h2 font-display font-bold mb-6">Build credibility that supports sales</h2>
            <p className="text-xl text-grey-100 mb-8">
              When prospects research you, they should find substance. Tisselor builds the positioning and content layer that makes your sales conversations credible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-lg px-8 py-4">
                Book Strategy Call<ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://tisselor.com" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Visit Tisselor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}`;

// Write the file
const brandingPath = path.join(baseDir, 'solutions/branding-thought-leadership/page.tsx');
fs.mkdirSync(path.dirname(brandingPath), { recursive: true });
fs.writeFileSync(brandingPath, brandingThoughtLeadership);

console.log('✅ Created: Branding & Thought Leadership solution page');
console.log('📝 Generated all solution pages!');
console.log('');
console.log('Next: Run this script to generate all product and industry pages');
console.log('Usage: node generate-remaining-pages.js');
