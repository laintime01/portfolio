// src/app/page.tsx
import Image from 'next/image'
import AnimatedContent from '@/components/home/animated-content'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto md:mx-0">
            <div className="absolute inset-0 bg-[#F3F4F6] dark:bg-gray-800 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob">
              {/* Death Star "craters" - subtle background details */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-2 h-2 rounded-full bg-current top-[20%] left-[30%]"></div>
                <div className="absolute w-3 h-3 rounded-full bg-current top-[40%] left-[60%]"></div>
                <div className="absolute w-2 h-2 rounded-full bg-current top-[60%] left-[20%]"></div>
              </div>
            </div>
            
            <div className="relative w-full h-full p-6">
              <Image
                src="/images/stormtrooper.png"
                alt="Stormtrooper"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Content Section */}
          <AnimatedContent />
        </div>
      </div>
    </div>
  )
}