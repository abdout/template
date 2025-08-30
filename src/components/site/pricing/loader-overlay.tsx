'use client'

import { useState, useEffect } from 'react'

export default function PricingLoaderOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simple timeout to hide loader after 1 second
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    </div>
  )
}


