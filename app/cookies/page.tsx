import React from 'react'
import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-h1 font-display font-bold mb-4">Cookie Policy</h1>
              <p className="text-grey-500 text-sm">Last updated: January 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-10">
              <section>
                <h2 className="text-h3 font-display font-bold mb-4">What are cookies?</h2>
                <p className="text-grey-600">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">How we use cookies</h2>
                <p className="text-grey-600 mb-6">
                  Zaash uses cookies to improve your experience on our website, understand how visitors interact with our content, and measure the effectiveness of our marketing. We use the following categories of cookies:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Strictly Necessary Cookies',
                      description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.',
                      examples: ['Session management', 'Security tokens', 'Load balancing']
                    },
                    {
                      name: 'Analytics Cookies',
                      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website and your experience.',
                      examples: ['Google Analytics', 'Page view tracking', 'User journey analysis']
                    },
                    {
                      name: 'Functional Cookies',
                      description: 'These cookies enable enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.',
                      examples: ['Language preferences', 'Form pre-fill', 'Chat widget state']
                    },
                    {
                      name: 'Marketing Cookies',
                      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements. They also help us measure the effectiveness of our marketing campaigns.',
                      examples: ['LinkedIn Insight Tag', 'Google Ads remarketing', 'Conversion tracking']
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-grey-50 rounded-xl p-6">
                      <h3 className="text-h5 font-display font-semibold mb-2">{category.name}</h3>
                      <p className="text-grey-600 mb-4">{category.description}</p>
                      <div>
                        <p className="text-sm font-medium text-grey-700 mb-2">Examples:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {category.examples.map((ex, i) => (
                            <li key={i} className="text-sm text-grey-500">{ex}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">Third-party cookies</h2>
                <p className="text-grey-600 mb-4">
                  Some cookies on our website are set by third-party services. These include:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-grey-200">
                        <th className="text-left py-3 pr-4 font-semibold text-grey-700">Provider</th>
                        <th className="text-left py-3 pr-4 font-semibold text-grey-700">Purpose</th>
                        <th className="text-left py-3 font-semibold text-grey-700">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-grey-100">
                      {[
                        { provider: 'Google Analytics', purpose: 'Website usage analytics', type: 'Analytics' },
                        { provider: 'Google Ads', purpose: 'Advertising and conversion tracking', type: 'Marketing' },
                        { provider: 'LinkedIn', purpose: 'Professional audience tracking', type: 'Marketing' },
                        { provider: 'HubSpot', purpose: 'Marketing automation and CRM', type: 'Functional / Marketing' },
                        { provider: 'Hotjar', purpose: 'Heatmaps and session recordings', type: 'Analytics' }
                      ].map((row, index) => (
                        <tr key={index}>
                          <td className="py-3 pr-4 text-grey-700 font-medium">{row.provider}</td>
                          <td className="py-3 pr-4 text-grey-600">{row.purpose}</td>
                          <td className="py-3 text-grey-500">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">Managing your cookie preferences</h2>
                <p className="text-grey-600 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="space-y-3 text-grey-600">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Note that disabling cookies may affect the functionality of our website.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span><strong>Cookie consent banner:</strong> When you first visit our website, you can choose which categories of cookies to accept via our cookie consent banner.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span><strong>Opt-out tools:</strong> For analytics cookies, you can use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>. For advertising cookies, visit <a href="https://www.youronlinechoices.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a>.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">Cookie retention periods</h2>
                <p className="text-grey-600 mb-4">
                  Different cookies are retained for different periods:
                </p>
                <ul className="space-y-2 text-grey-600">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
                  <li><strong>Analytics cookies:</strong> Typically retained for 13 months</li>
                  <li><strong>Marketing cookies:</strong> Typically retained for 90 days to 2 years</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">Changes to this policy</h2>
                <p className="text-grey-600">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of any significant changes by updating the date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold mb-4">Contact us</h2>
                <p className="text-grey-600 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-grey-50 rounded-xl p-6">
                  <p className="text-grey-700 font-medium">Zaash</p>
                  <p className="text-grey-600">Email: <a href="mailto:privacy@zaash.com" className="text-accent hover:underline">privacy@zaash.com</a></p>
                  <p className="text-grey-600 mt-4">
                    Or visit our <Link href="/contact" className="text-accent hover:underline">contact page</Link> to get in touch.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
