// src/components/home/animated-content.tsx
'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function AnimatedContent() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch('/assets/RYAN_ZHENG_IT.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RYAN_ZHENG_IT.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
    setIsDownloading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-left"
    >
      {/* Main content */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          RYAN ZHENG
        </h1>
        <h2 className="text-xl text-muted-foreground tracking-widest uppercase mb-4">
          Full Stack Developer & IT Support
        </h2>
        <p className="text-muted-foreground max-w-[600px]">
          Passionate about creating efficient solutions and providing excellent technical support. 
          Experienced in full-stack development and IT infrastructure management.
        </p>
      </div>

      {/* Download CV with animations and loading state */}
      <div className="flex justify-end">
        <motion.button
          onClick={handleDownload}
          className="relative inline-block group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isDownloading}
        >
          {/* Animated circle */}
          <motion.div 
            className="absolute left-[-5px] top-1/2 transform -translate-y-1/2"
            animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
            transition={isDownloading ? { 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            } : {}}
          >
            {/* Outer circle */}
            <motion.div 
              className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700
                     group-hover:border-gray-400 dark:group-hover:border-gray-500 
                     transition-all duration-300"
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(99, 102, 241, 0.8)",
              }}
            />
            
            {/* Loading spinner */}
            {isDownloading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-gray-600 dark:text-gray-400" />
              </div>
            )}
          </motion.div>
          
          {/* Text with hover animation */}
          <motion.span 
            className="text-gray-600 dark:text-gray-400 tracking-wide pl-3 inline-block"
            whileHover={{ x: 3 }}
            animate={isDownloading ? { opacity: 0.7 } : { opacity: 1 }}
          >
            {isDownloading ? "Downloading..." : "Download CV"}
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  )
}