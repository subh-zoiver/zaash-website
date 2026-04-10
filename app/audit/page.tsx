'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  industry: string
  revenue: string
  tools: string[]
  painPoints: string[]
  goal: string
}

export default function AuditPage() {
  const [step, setStep] = useState<'form' | 'result'>('form')
  const [score, setScore] = useState(0)
  const [band, setBand] = useState('')
  const [topGaps, setTopGaps] = useState<string[]>([])
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>()

  const calculateScore = (data: FormData) => {
    let calculatedScore = 50 // Base score
    
    // Industry bonus (IT services gets higher baseline)
    if (data.industry === 'it-services') calculatedScore += 10
    
    // Revenue stage (larger companies have more structure)
    if (data.revenue === '25-50cr') calculatedScore += 5
    if (data.revenue === '50cr+') calculatedScore += 10
    
    // Tools penalty (too many unused tools is a red flag)
    if (data.tools.length > 3) calculatedScore -= 5
    if (data.tools.length === 0) calculatedScore -= 10
    
    // Pain points penalty
    calculatedScore -= data.painPoints.length * 8
    
    // Goal clarity bonus
    if (data.goal === 'build-outbound') calculatedScore += 5
    
    // Ensure score is between 0-100
    const finalScore = Math.max(0, Math.min(100, calculatedScore))
    
    // Determine band
    let scoreBand = ''
    if (finalScore >= 75) scoreBand = 'Green'
    else if (finalScore >= 50) scoreBand = 'Amber'
    else scoreBand = 'Red'
    
    // Determine top gaps based on pain points selected
    const gaps: string[] = []
    if (data.painPoints.includes('no-outbound')) gaps.push('No Systematic Outbound Motion')
    if (data.painPoints.includes('crm-messy')) gaps.push('CRM Data Quality Issues')
    if (data.painPoints.includes('tools-unused')) gaps.push('Tool Under-Utilization')
    if (data.painPoints.includes('founder-bottleneck')) gaps.push('Founder Sales Dependency')
    if (data.painPoints.includes('no-visibility')) gaps.push('Pipeline Visibility Gaps')
    if (data.painPoints.includes('burned-before')) gaps.push('Vendor Trust Issues')
    
    return { finalScore, scoreBand, gaps: gaps.slice(0, 3) }
  }

  const onSubmit = async (data: FormData) => {
    const { finalScore, scoreBand, gaps } = calculateScore(data)
    
    setScore(finalScore)
    setBand(scoreBand)
    setTopGaps(gaps)
    setStep('result')
    
    // TODO: Send data to backend/CRM
    console.log('Audit submitted:', { ...data, score: finalScore, band: scoreBand, gaps })
  }

  const selectedPainPoints = watch('painPoints') || []
  const selectedTools = watch('tools') || []

  return (
    <div className="pt-20">
      {step === 'form' && (
        <>
          {/* Hero */}
          <section className="bg-gradient-primary text-white section-padding-sm">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-h1 font-display font-bold mb-6">
                  Free 3-Minute Sales Diagnostic
                </h1>
                <p className="text-xl text-grey-100">
                  Answer 5 questions. Get a directional score and your top 3 problem areas—specific to your company.
                </p>
              </div>
            </div>
          </section>

          {/* Form */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Question 1: Email */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        Your company email *
                      </h3>
                    </div>
                    <input
                      {...register('email', {
                        required: 'Company email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@(?!gmail|yahoo|hotmail|outlook)[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please use a company email (no Gmail, Yahoo, etc.)'
                        }
                      })}
                      type="email"
                      className="input-field"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-danger text-sm mt-2">{errors.email.message}</p>
                    )}
                    <p className="text-xs text-grey-500 mt-2">
                      B2B companies only. We'll send your results here.
                    </p>
                  </div>

                  {/* Question 2: Industry */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        Industry *
                      </h3>
                    </div>
                    <select
                      {...register('industry', { required: 'Please select an industry' })}
                      className="input-field"
                    >
                      <option value="">Select your industry</option>
                      <option value="it-services">IT Services & Software</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="ai-tech">AI & Tech Startups</option>
                      <option value="bfsi">BFSI</option>
                      <option value="design">Design & Creative Services</option>
                      <option value="other">Other B2B</option>
                    </select>
                    {errors.industry && (
                      <p className="text-danger text-sm mt-2">{errors.industry.message}</p>
                    )}
                  </div>

                  {/* Question 3: Revenue */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        Annual revenue bracket *
                      </h3>
                    </div>
                    <select
                      {...register('revenue', { required: 'Please select a revenue range' })}
                      className="input-field"
                    >
                      <option value="">Select range</option>
                      <option value="0-10cr">₹0-10 Crore</option>
                      <option value="10-25cr">₹10-25 Crore</option>
                      <option value="25-50cr">₹25-50 Crore</option>
                      <option value="50cr+">₹50 Crore+</option>
                    </select>
                    {errors.revenue && (
                      <p className="text-danger text-sm mt-2">{errors.revenue.message}</p>
                    )}
                  </div>

                  {/* Question 4: Tools */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        What tools do you currently use? (Select all that apply)
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { value: 'hubspot', label: 'HubSpot CRM' },
                        { value: 'salesforce', label: 'Salesforce' },
                        { value: 'zoho', label: 'Zoho CRM' },
                        { value: 'apollo', label: 'Apollo.io' },
                        { value: 'zoominfo', label: 'ZoomInfo' },
                        { value: 'gong', label: 'Gong / Call recording' },
                        { value: 'none', label: 'None / Excel only' }
                      ].map((tool) => (
                        <label key={tool.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            {...register('tools')}
                            type="checkbox"
                            value={tool.value}
                            className="w-5 h-5 text-accent border-grey-300 rounded focus:ring-accent"
                          />
                          <span className="text-grey-700">{tool.label}</span>
                        </label>
                      ))}
                    </div>
                    <p className="text-sm text-grey-500 mt-3">
                      Selected: {selectedTools.length}
                    </p>
                  </div>

                  {/* Question 5: Pain Points */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        5
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        Top pain points (Select up to 3) *
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { value: 'no-outbound', label: 'No systematic outbound prospecting' },
                        { value: 'crm-messy', label: 'CRM data is incomplete or unreliable' },
                        { value: 'tools-unused', label: 'Tools purchased but underused' },
                        { value: 'founder-bottleneck', label: 'Founder has to close every deal' },
                        { value: 'no-visibility', label: 'No visibility into pipeline health' },
                        { value: 'burned-before', label: 'Burned by agencies/vendors before' }
                      ].map((pain) => (
                        <label key={pain.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            {...register('painPoints', {
                              validate: (value) => value && value.length > 0 && value.length <= 3 || 'Select 1-3 pain points'
                            })}
                            type="checkbox"
                            value={pain.value}
                            disabled={selectedPainPoints.length >= 3 && !selectedPainPoints.includes(pain.value)}
                            className="w-5 h-5 text-accent border-grey-300 rounded focus:ring-accent disabled:opacity-50"
                          />
                          <span className={`text-grey-700 ${selectedPainPoints.length >= 3 && !selectedPainPoints.includes(pain.value) ? 'opacity-50' : ''}`}>
                            {pain.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.painPoints && (
                      <p className="text-danger text-sm mt-2">{errors.painPoints.message}</p>
                    )}
                    <p className="text-sm text-grey-500 mt-3">
                      Selected: {selectedPainPoints.length} / 3
                    </p>
                  </div>

                  {/* Question 6: Goal */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        6
                      </div>
                      <h3 className="text-h5 font-display font-semibold">
                        Primary goal in next 6 months *
                      </h3>
                    </div>
                    <select
                      {...register('goal', { required: 'Please select a goal' })}
                      className="input-field"
                    >
                      <option value="">Select goal</option>
                      <option value="build-outbound">Build systematic outbound motion</option>
                      <option value="fix-crm">Fix CRM and get reliable data</option>
                      <option value="scale-team">Scale beyond founder-led sales</option>
                      <option value="improve-conversion">Improve pipeline conversion rates</option>
                      <option value="other">Other / Multiple goals</option>
                    </select>
                    {errors.goal && (
                      <p className="text-danger text-sm mt-2">{errors.goal.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                    Get My Score
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-grey-500 text-center">
                    This is a directional score based on 5 questions. The full audit analyses 50+ data points and goes 10x deeper.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {step === 'result' && (
        <>
          {/* Results */}
          <section className="bg-gradient-primary text-white section-padding-sm">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-h1 font-display font-bold mb-6">
                  Your Sales Readiness Score
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-7xl font-bold text-accent">{score}</div>
                  <div className="text-left">
                    <div className="text-2xl font-display font-semibold">/ 100</div>
                    <div className={`text-lg px-4 py-1 rounded-full inline-block ${
                      band === 'Green' ? 'bg-success' :
                      band === 'Amber' ? 'bg-warning' :
                      'bg-danger'
                    }`}>
                      {band} Band
                    </div>
                  </div>
                </div>
                <p className="text-xl text-grey-100">
                  {band === 'Green' && 'Strong foundation, but still room for optimization'}
                  {band === 'Amber' && 'Some structure exists, but critical gaps are holding you back'}
                  {band === 'Red' && 'Significant gaps that are directly impacting revenue growth'}
                </p>
              </div>
            </div>
          </section>

          <section className="section-padding bg-grey-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h2 font-display font-bold mb-8 text-center">
                  Your top 3 problem areas
                </h2>

                <div className="space-y-6 mb-12">
                  {topGaps.map((gap, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 bg-danger/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-danger" />
                      </div>
                      <div>
                        <h3 className="text-h5 font-display font-semibold mb-2">
                          {index + 1}. {gap}
                        </h3>
                        <p className="text-grey-600 text-sm">
                          {gap.includes('Outbound') && 'You're relying entirely on referrals and inbound. Growth is capped at your network size.'}
                          {gap.includes('CRM') && 'Your data is incomplete or unreliable. You can't trust your reports or make data-driven decisions.'}
                          {gap.includes('Tool') && 'You've purchased tools but they're not delivering ROI. Implementation and adoption are the real challenges.'}
                          {gap.includes('Founder') && 'Only you can close deals. Your team handles admin but not strategy. You can't scale yourself.'}
                          {gap.includes('Pipeline') && 'You don't know what's real vs. hopeful in your pipeline. Forecasts are guesses, not predictions.'}
                          {gap.includes('Vendor') && 'You've been promised lead gen and got junk. You're skeptical of all vendors now.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent-subtle rounded-xl p-8 border-2 border-accent/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-h4 font-display font-semibold mb-2">
                        This is a directional score
                      </h3>
                      <p className="text-grey-700">
                        Based on 5 questions, this gives you a high-level view of where you stand. 
                        <strong className="text-grey-900"> The full audit analyses 50+ data points</strong> across your CRM, 
                        tools, process, and team—and goes 10x deeper with specific, actionable recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/products/sales-audit" className="btn-primary justify-center">
                      See Full Audit Details
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="btn-secondary justify-center">
                      Book a Strategy Call
                    </Link>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-grey-600">
                    <CheckCircle className="w-4 h-4 inline text-success mr-1" />
                    Results sent to your email • No spam, just your score
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
