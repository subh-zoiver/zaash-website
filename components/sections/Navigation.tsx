'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    { name: 'Sales Process & GTM', href: '/solutions/sales-process-gtm' },
    { name: 'Outbound Prospecting', href: '/solutions/outbound-prospecting' },
    { name: 'CRM Efficiency', href: '/solutions/crm-efficiency' },
    { name: 'Account-Based Intelligence', href: '/solutions/account-based-intelligence' },
    { name: 'Event GTM Strategy', href: '/solutions/event-gtm' },
    { name: 'Branding & Thought Leadership', href: '/solutions/branding-thought-leadership' },
  ]

  const products = [
    { name: 'Sales Audit Tool', href: '/products/sales-audit', badge: 'Live' },
    { name: 'Twelfth Brain', href: '/products/twelfth-brain', badge: 'Active' },
    { name: 'Follow-Up System', href: '/products/follow-up-system', badge: 'Soon' },
    { name: 'Prospecting Engine', href: '/products/prospecting-engine', badge: 'Soon' },
  ]

  const industries = [
    { name: 'IT Services & Software', href: '/industries/it-services' },
    { name: 'Cybersecurity', href: '/industries/cybersecurity' },
    { name: 'Cloud & Infrastructure', href: '/industries/cloud-infrastructure' },
    { name: 'AI & Tech Startups', href: '/industries/ai-startups' },
    { name: 'BFSI', href: '/industries/bfsi' },
    { name: 'Design & Creative', href: '/industries/design-creative' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">Z</span>
            </div>
            <span className="text-white font-display font-bold text-2xl">ZAASH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="text-grey-100 hover:text-accent font-medium py-2 flex items-center gap-1 transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-grey-900 hover:bg-accent-subtle hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-grey-100 hover:text-accent font-medium py-2 flex items-center gap-1 transition-colors">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {products.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-grey-900 hover:bg-accent-subtle hover:text-accent transition-colors group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.badge === 'Live' ? 'bg-success text-white' :
                            item.badge === 'Active' ? 'bg-info text-white' :
                            'bg-grey-200 text-grey-600'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="text-grey-100 hover:text-accent font-medium py-2 flex items-center gap-1 transition-colors">
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-grey-900 hover:bg-accent-subtle hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-grey-100 hover:text-accent font-medium py-2 transition-colors">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-ghost !text-grey-100 hover:!text-accent">
              Book a Call
            </Link>
            <Link href="/audit" className="btn-primary">
              Take the Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-light">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                  className="text-grey-100 font-medium flex items-center gap-2 w-full"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-grey-400 hover:text-accent py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                  className="text-grey-100 font-medium flex items-center gap-2 w-full"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'products' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-grey-400 hover:text-accent py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
                  className="text-grey-100 font-medium flex items-center gap-2 w-full"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'industries' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-grey-400 hover:text-accent py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block text-grey-100 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="btn-ghost !text-grey-100 w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                </Link>
                <Link
                  href="/audit"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Take the Free Audit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
