'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from './main-nav'
import { marketingConfig } from './constant'
import { RightActions } from './right-actions'

interface SiteHeaderProps {
  isAuthenticated: boolean
}

export default function SiteHeaderClient({ isAuthenticated }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header - Animated */}
      <header 
        className={`
          fixed z-40 left-1/2 transform -translate-x-1/2 w-full hidden md:block
          transition-[top] duration-700 ease-linear
          ${isScrolled ? 'top-0' : 'top-4'}
        `}
      >
        <div className={`
          transition-[width,max-width,background-color,border-radius,box-shadow,opacity] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${isScrolled 
            ? 'w-full bg-background/95 backdrop-blur-sm rounded-none shadow-none opacity-100' 
            : 'w-fit mx-auto bg-muted rounded-2xl shadow-sm opacity-90'
          }
        `}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex h-12 items-center justify-center gap-4">
              <MainNav items={marketingConfig.mainNav} />
              <RightActions isAuthenticated={isAuthenticated} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Static Second Stage */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm">
        <div className="flex h-12 items-center justify-between px-4">
          <MainNav items={marketingConfig.mainNav} />
          <RightActions isAuthenticated={isAuthenticated} />
        </div>
      </header>
    </>
  )
}