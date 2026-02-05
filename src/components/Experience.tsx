'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    company: 'Amazon',
    role: 'IT Support Engineer Intern',
    period: 'May 2025 - Nov 2025',
    location: 'Augny, France',
    logo: '/amazon.png',
    color: 'accent-orange',
    description: 'IT Infrastructure and automation in an Amazon fulfillment center',
    achievements: [
      {
        title: 'Workstation Expansion',
        description: 'Deployment of 42 new stations (+15%) increasing production by 13.6%',
        impact: '+75K units/day',
      },
      {
        title: 'TED Automation Project',
        description: 'IT Lead for network deployment of 8 automated machines',
        impact: '-97.5% safety incidents',
      },
      {
        title: 'SPP Project (Smart Pack Paper)',
        description: 'Infrastructure setup with industrial firewalls and network switches',
        impact: '+68% production efficiency',
      },
      {
        title: 'AWS Monitoring Solution',
        description: 'Development of a printer monitoring system with CloudFront, Lambda, DynamoDB, IoT Core',
        impact: '+7% production efficiency',
      },
    ],
  },
  {
    company: 'PwC',
    role: 'Cyber Threat Analyst Intern',
    period: 'Apr 2024 - Sep 2024',
    location: 'Neuilly-sur-Seine, France',
    logo: '/PwC_Logo.jpg',
    color: 'accent-cyan',
    description: 'Cyber threat analysis and security watch for enterprise clients',
    achievements: [
      {
        title: 'Threat Intelligence Watch',
        description: 'Daily publications (2x/day) on vulnerabilities, malwares and threat actors via Slack',
        impact: 'Real-time team awareness',
      },
      {
        title: 'CTI Analysis',
        description: 'Data enrichment on ThreatQ platform',
        impact: 'Enhanced knowledge base',
      },
      {
        title: 'Weekly Reports',
        description: 'Production of reports analyzing key events of the week',
        impact: 'Client decision support',
      },
      {
        title: 'Presentations',
        description: 'Threat report presentations to PwC security team and CIX-A members',
        impact: 'Team visibility',
      },
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeExp, setActiveExp] = useState(0)

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-aws-dark via-transparent to-aws-dark" />
      
      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-terminal-green text-sm">// journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Experience<span className="text-white">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline selector */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-4">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveExp(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeExp === index
                      ? 'bg-aws-gray border-white/50 shadow-lg shadow-white/5'
                      : 'bg-aws-gray/30 border-aws-border hover:border-aws-border/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-10 flex-shrink-0 relative ${activeExp === index ? 'scale-110' : ''} transition-transform`}>
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display font-bold text-lg ${activeExp === index ? 'text-white' : 'text-gray-400'}`}>
                        {exp.company}
                      </h3>
                      <p className={`text-sm ${activeExp === index ? 'text-white font-medium' : 'text-gray-500'}`}>
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all ${activeExp === index ? 'text-terminal-green rotate-90' : 'text-gray-600'}`} />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-aws-gray/50 backdrop-blur-sm border border-aws-border rounded-3xl p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-28 h-12 flex-shrink-0 relative">
                      <Image
                        src={experiences[activeExp].logo}
                        alt={experiences[activeExp].company}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {experiences[activeExp].company}
                      </h3>
                      <p className="text-white font-medium">{experiences[activeExp].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experiences[activeExp].period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experiences[activeExp].location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 pb-8 border-b border-aws-border">
                {experiences[activeExp].description}
              </p>

              {/* Achievements */}
              <div className="space-y-6">
                <h4 className="font-mono text-sm text-terminal-green">// key achievements</h4>
                <div className="grid gap-4">
                  {experiences[activeExp].achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-5 bg-aws-dark/50 rounded-xl border border-aws-border hover:border-white/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h5 className="font-semibold text-white group-hover:text-white transition-colors">
                            {achievement.title}
                          </h5>
                          <p className="text-sm text-gray-500 mt-1">{achievement.description}</p>
                        </div>
                        <div className="shrink-0 px-3 py-1 bg-aws-dark/80 border border-aws-border rounded-full">
                          <span className="text-xs font-mono text-white">{achievement.impact}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
