import React from 'react'
import SectionHeading from './SectionHeading'
import {VideoEmbedUrls} from "../assets/constants"

const YoutubeGrid = () => {
  return (
    <div id="youtube" className='min-h-[70vh]
        mb-10 py-10  
        text-center
        space-y-6
        '>

      <SectionHeading>Popular Videos</SectionHeading>
      <p className='text-[18px] lg:text-[22px] max-w-[900px] relative mx-auto'>This is my YouTube channel where I explain productivity systems in short, simple and clear videos.</p>

      <div className='max-w-[1000px] grid gap-10 grid-cols-1 md:grid-cols-2 border-red-500 mx-auto'>
        {VideoEmbedUrls.map(({itemurl}, index) => (
            <div className='w-full'>
                <iframe 
                key={"preview-video-" + index} 
                src={itemurl} 
                className='aspect-video w-full'
                />
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default YoutubeGrid