import React from 'react'
import { featuredProjects } from './constant'
import HoverEffect from '@/components/site/video/card-video'

const FeaturedProjects = () => {
  return (
    <div className='mt-6 md:mt-20'>
      <div className=" -mt-10">
        <HoverEffect items={featuredProjects()} />
      </div>
    </div>
  )
}

export default FeaturedProjects