'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  company: string
  revenue: string
  topic: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: Integrate with Resend or email service
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding-sm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-display font-bold mb-6">
              Let's talk about your sales situation
            </h1>
            <p className="text-xl text-grey-100 mb-8">
              Book a 30-minute call or send us a message. No sales pitch—a real conversation about where you are and where you want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Book a Call */}
            <div>
              <h2 className="text-h3 font-display font-bold mb-6">
                Book a Call
              </h2>
              <p className="text-grey-600 mb-6">
                30 minutes with Ashish or Subh. We'll walk through your current state, identify the gaps, and outline what a systematic sales process would look like for your company.
              </p>
              
              {/* Calendar Embed Placeholder */}
              <div className="bg-grey-50 rounded-xl p-8 border-2 border-dashed border-grey-200 min-h-[500px] flex flex-col items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-h5 font-display font-semibold mb-3">
                    Calendar Integration
                  </h3>
                  <p className="text-grey-600 mb-6">
                    Calendly or Cal.com embed will be placed here. Configure your scheduling link and update this component.
                  </p>
                  <div className="text-sm text-grey-500 bg-white rounded-lg p-4 border border-grey-200">
                    <strong>Setup Instructions:</strong><br/>
                    1. Create Calendly/Cal.com account<br/>
                    2. Get embed code<br/>
                    3. Add to this component<br/>
                    4. Update contact email below
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-grey-600">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Available slots shown in real-time</span>
              </div>
            </div>

            {/* Send a Message */}
            <div>
              <h2 className="text-h3 font-display font-bold mb-6">
                Send a Message
              </h2>
              <p className="text-grey-600 mb-6">
                Prefer to write? Fill out this form and we'll respond within 24 hours on business days.
              </p>

              {isSubmitted && (
                <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <p className="text-success font-medium">
                    Message sent! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-grey-700 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="input-field"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-danger text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-grey-700 mb-2">
                    Company Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please use a company email (no Gmail, Yahoo, etc.)'
                      }
                    })}
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-danger text-sm mt-1">{errors.email.message}</p>
                  )}
                  <p className="text-xs text-grey-500 mt-1">
                    B2B companies only - no personal email addresses
                  </p>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-grey-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register('company', { required: 'Company name is required' })}
                    type="text"
                    id="company"
                    className="input-field"
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="text-danger text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-grey-700 mb-2">
                    Annual Revenue Range
                  </label>
                  <select
                    {...register('revenue')}
                    id="revenue"
                    className="input-field"
                  >
                    <option value="">Select range</option>
                    <option value="0-10cr">₹0-10 Crore</option>
                    <option value="10-25cr">₹10-25 Crore</option>
                    <option value="25-50cr">₹25-50 Crore</option>
                    <option value="50-100cr">₹50-100 Crore</option>
                    <option value="100cr+">₹100 Crore+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-grey-700 mb-2">
                    What do you want to discuss? *
                  </label>
                  <select
                    {...register('topic', { required: 'Please select a topic' })}
                    id="topic"
                    className="input-field"
                  >
                    <option value="">Select topic</option>
                    <option value="sales-audit">Sales Audit</option>
                    <option value="solutions">Solutions Engagement</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.topic && (
                    <p className="text-danger text-sm mt-1">{errors.topic.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-grey-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="text-sm text-grey-600 mt-6 text-center">
                We respond to every enquiry within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 font-display font-bold mb-8 text-center">
              Other ways to reach us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold mb-2">Email</h3>
                <a href="mailto:contact@zaash.com" className="text-accent hover:underline">
                  contact@zaash.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold mb-2">Phone</h3>
                <a href="tel:+91XXXXXXXXXX" className="text-accent hover:underline">
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold mb-2">Office</h3>
                <p className="text-grey-600 text-sm">
                  Bangalore, Karnataka<br/>
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-display font-bold mb-6">
                Not ready to talk yet?
              </h2>
              <p className="text-xl text-grey-100 mb-8">
                Start with the free 3-minute diagnostic. Get a directional score and see where your revenue is leaking—no call required.
              </p>
              <Link href="/audit" className="btn-primary bg-accent hover:bg-accent-hover inline-flex">
                Take the Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
