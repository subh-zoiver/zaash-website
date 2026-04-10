'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:flex items-center justify-between gap-6">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-display font-semibold text-grey-900 mb-2">
              We value your privacy
            </h3>
            <p className="text-grey-600 text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.{' '}
              <Link href="/cookies" className="text-accent hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={declineCookies}
              className="px-6 py-2 text-grey-600 hover:text-grey-900 font-medium transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="btn-primary"
            >
              Accept All
            </button>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-grey-400 hover:text-grey-900"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
