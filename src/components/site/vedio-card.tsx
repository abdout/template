"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

export interface VideoCardProps {
  logo: string
  title: string
  description: string
  ctaText: string
  secondaryCtaText: string
  videoSrc?: string
  videoPoster?: string
  className?: string
}

const VideoCard = ({
  logo,
  title,
  description,
  ctaText,
  secondaryCtaText,
  videoSrc = "/site/dream.mp4",
  videoPoster,
  className
}: VideoCardProps) => {
  const isVertical = className?.includes('flex-col')
  
  return (
    <div
      className="overflow-hidden rounded-3xl bg-muted"
    >
      <div className={`flex ${isVertical ? 'flex-col' : 'flex-col lg:flex-row'}`}>
        {/* Text Content Section - Left for horizontal, bottom for vertical */}
        {!isVertical && (
          <div className="lg:w-[40%] p-8">
            <div className="flex flex-col h-full justify-between">
              {/* Logo and Title */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-serif">
                    {logo.split(' ')[0]}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                    {logo.split(' ')[1]}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg"
                >
                  {ctaText}
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium px-6 py-3"
                >
                  {secondaryCtaText}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Video/Image Section - Right for horizontal, top for vertical */}
        <div className={`${isVertical ? 'w-full' : 'lg:w-[60%]'} bg-gray-900 dark:bg-black overflow-hidden`}>
          <div className="relative h-40 lg:h-full min-h-[250px]">
            <video
              className="w-full h-full object-cover pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="/site/dream.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Content Section - Only for vertical layout (bottom) */}
        {isVertical && (
          <div className="w-full p-8">
            <div className="flex flex-col h-full justify-between">
              {/* Logo and Title */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-serif">
                    {logo.split(' ')[0]}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                    {logo.split(' ')[1]}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg"
                >
                  {ctaText}
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium px-6 py-3"
                >
                  {secondaryCtaText}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoCard
