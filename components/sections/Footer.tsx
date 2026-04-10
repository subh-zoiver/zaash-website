import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { name: 'Sales Process & GTM', href: '/solutions/sales-process-gtm' },
    { name: 'Outbound Prospecting', href: '/solutions/outbound-prospecting' },
    { name: 'CRM Efficiency', href: '/solutions/crm-efficiency' },
    { name: 'Account-Based Intelligence', href: '/solutions/account-based-intelligence' },
  ]

  const products = [
    { name: 'Sales Audit Tool', href: '/products/sales-audit' },
    { name: 'Twelfth Brain', href: '/products/twelfth-brain' },
    { name: 'Follow-Up System', href: '/products/follow-up-system' },
    { name: 'Prospecting Engine', href: '/products/prospecting-engine' },
  ]

  const industries = [
    { name: 'IT Services & Software', href: '/industries/it-services' },
    { name: 'Cybersecurity', href: '/industries/cybersecurity' },
    { name: 'Cloud & Infrastructure', href: '/industries/cloud-infrastructure' },
    { name: 'AI & Tech Startups', href: '/industries/ai-startups' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Audit', href: '/audit' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]

  return (
    <footer className="bg-primary-dark text-grey-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-display font-bold text-2xl">ZAASH</span>
            </Link>
            <p className="text-grey-400 mb-6 max-w-sm">
              The sales intelligence layer for B2B companies that have outgrown instinct-led selling.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@zaash.com"
                className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/zaash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/zaash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-grey-400 text-sm">
              © {currentYear} Zaash. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-grey-400 hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-grey-400 text-xs mt-4 text-center md:text-left">
            Registered Office: [Address to be provided], Bangalore, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  )
}
