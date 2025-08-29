'use client'

import React, { useState, useEffect } from 'react'
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
    <header 
      className={`
        fixed z-40 left-1/2 transform -translate-x-1/2
        transition-[width,max-width,background-color,border-radius,box-shadow] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        transition-[top] duration-700 ease-linear
        ${isScrolled 
          ? 'top-0 w-screen max-w-none bg-background rounded-none shadow-none' 
          : 'top-4 max-w-7xl bg-muted rounded-2xl shadow-sm'
        }
      `}
    >
      <div className={`
        max-w-7xl mx-auto
        transition-[padding] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${isScrolled ? 'px-6' : 'px-6'}
      `}>
        <div className="flex h-12 items-center justify-center gap-4">
          <MainNav items={marketingConfig.mainNav} />
          <RightActions isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </header>
  )
}