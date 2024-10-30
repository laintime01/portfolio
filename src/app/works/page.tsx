// src/app/works/page.tsx
'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from 'next/image' // 添加 Image 组件

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  link?: string
}

const projects: Project[] = [
  {
    title: "Newinca - Immigrant Information Platform",
    description: "A comprehensive information platform for new immigrants, offering classified information about housing, jobs, education, and daily life services.",
    technologies: ["React.js", "MySQL", "Element UI"],
    image: "/images/newinca.png",
    link: "https://www.newinca.com"
  },
  {
    title: "University Information Portal",
    description: "Internal information management system for university staff and students, providing course schedules, campus news, and administrative services.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Ant Design"],
    image: "/images/infoweb.png",
  },
  {
    title: "Yunliu Campaign Website",
    description: "Personal campaign website built with React, featuring modern design and interactive elements.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/yunliu.png",
  },
  {
    title: "Toronto Clinic Appointment System",
    description: "Full-stack appointment management system for a Toronto-based clinic, streamlining patient scheduling.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    image: "/images/loyeco.png",
  }
]

export default function Works() {
  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Selected Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-6">
                  {/* 替换 div 为 Image 组件 */}
                  <div className="relative aspect-video mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}