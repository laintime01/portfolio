// src/app/about/page.tsx
'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Film, Fish, Code, Database, Server, GitBranch, Cloud, Cpu, Wrench } from "lucide-react"

interface TechSkill {
  name: string
  icon: React.ReactNode
  level: number // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'support'
}

const techSkills: TechSkill[] = [
  // Frontend
  { 
    name: "React", 
    icon: <Code className="w-5 h-5" />, 
    level: 5,
    category: 'frontend'
  },
  { 
    name: "Node.js", 
    icon: <Server className="w-5 h-5" />, 
    level: 4,
    category: 'backend'
  },
  { 
    name: "Spring Boot", 
    icon: <Cpu className="w-5 h-5" />, 
    level: 4,
    category: 'backend'
  },
  { 
    name: "MySQL", 
    icon: <Database className="w-5 h-5" />, 
    level: 4,
    category: 'backend'
  },
  { 
    name: "Git", 
    icon: <GitBranch className="w-5 h-5" />, 
    level: 5,
    category: 'devops'
  },
  { 
    name: "AWS", 
    icon: <Cloud className="w-5 h-5" />, 
    level: 4,
    category: 'devops'
  },
  { 
    name: "IT Support", 
    icon: <Wrench className="w-5 h-5" />, 
    level: 5,
    category: 'support'
  },
]

export default function About() {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full ${
              i < level ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer & Star Wars Enthusiast
          </p>
        </div>

        <div className="space-y-12">
          {/* Education Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">Monash University</h3>
                  <p className="text-muted-foreground">Network Computing</p>
                </li>
                <li>
                  <h3 className="font-medium">Beihang University</h3>
                  <p className="text-muted-foreground">Software Engineering</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technical Skills Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold">Technical Skills</h2>
              </div>
              
              <div className="space-y-8">
                {/* Development Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        {renderSkillLevel(skill.level)}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Interest */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold">Professional Interests</h2>
              </div>
              <p className="text-muted-foreground">
                I'm passionate about learning new technologies and solving complex problems. 
                The IT industry's fast-paced nature and constant evolution keep me motivated 
                to stay at the forefront of technological advancements. With a strong 
                background in both development and IT support, I bring a comprehensive 
                understanding to technical challenges.
              </p>
            </CardContent>
          </Card>

          {/* Hobbies & Interests */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Film className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Film className="w-4 h-4" /> Movies
                  </h3>
                  <p className="text-muted-foreground">
                    A huge Star Wars fan who believes in the power of the Force.
                    Always excited to discuss movie theories and cinematography.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Fish className="w-4 h-4" /> Fishing
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy spending peaceful time fishing, where patience and
                    technique come together for a rewarding experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}