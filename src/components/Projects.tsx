'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cloud, Database, Wifi, Printer, Video, MessageSquare, Cpu, Captions, Zap, ArrowRight, X } from 'lucide-react'

const projects = [
  {
    id: 'printer-monitoring',
    title: 'AWS Printer Monitoring',
    subtitle: 'Serverless IoT Solution',
    description: 'Predictive monitoring system for industrial printers using a 100% serverless AWS architecture.',
    longDescription: `Solution developed to anticipate industrial printer failures in the Amazon fulfillment center.
    The system collects real-time metrics via IoT Core, processes them with Lambda, and stores data in DynamoDB.
    CloudFront serves the visualization dashboard. The predictive approach reduced downtime by 7%.`,
    impact: '+7% production efficiency',
    tags: ['AWS', 'IoT Core', 'Lambda', 'DynamoDB', 'CloudFront', 'Python'],
    color: 'accent-orange',
    icon: Printer,
    architecture: [
      { name: 'IoT Core', icon: Wifi, description: 'MQTT Collection' },
      { name: 'Lambda', icon: Zap, description: 'Processing' },
      { name: 'DynamoDB', icon: Database, description: 'Storage' },
      { name: 'CloudFront', icon: Cloud, description: 'Dashboard' },
    ],
  },
  {
    id: 'autoclipper',
    title: 'AutoClipper',
    subtitle: 'AI-Powered Video Automation',
    description: 'Discord bot that transforms Twitch clips into TikTok-ready vertical videos with smart webcam detection and animated subtitles.',
    longDescription: `AutoClipper is a discord bot that automates a tedious workflow for content creators: transforming horizontal Twitch clips into professional vertical TikTok videos.

    The pipeline includes: intelligent webcam detection using YOLO v8 (multi-frame voting), automatic video composition (35% webcam + 65% gameplay), Twitch branding overlay, and Hormozi-style animated subtitles (word-by-word highlighting).

    Key features: automatic fallbacks (AssemblyAI → Whisper, YOLO → visual analysis), adaptive compression targeting 100MB, GPU-accelerated encoding with NVENC (5-10x faster), and Streamable upload for large files.`,
    impact: 'Full automation pipeline',
    tags: ['Python', 'YOLO v8', 'MoviePy', 'AssemblyAI', 'Whisper', 'NVENC'],
    color: 'accent-purple',
    icon: Video,
    architecture: [
      { name: 'Discord', icon: MessageSquare, description: 'Bot Interface' },
      { name: 'YOLO v8', icon: Cpu, description: 'Webcam Detection' },
      { name: 'MoviePy', icon: Video, description: 'Video Processing' },
      { name: 'Subtitles', icon: Captions, description: 'AI Transcription' },
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const activeProject = projects.find(p => p.id === selectedProject)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aws-dark via-aws-gray/10 to-aws-dark" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-terminal-green text-sm">// achievements</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Development Projects<span className="text-white">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects with measurable impact on production and operational efficiency
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative h-full p-8 bg-aws-gray/50 backdrop-blur-sm border border-aws-border rounded-2xl hover:border-white/50 transition-all card-shine overflow-hidden">
                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${project.color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  project.color === 'accent-orange' ? 'bg-accent-orange/10' :
                  project.color === 'accent-cyan' ? 'bg-accent-cyan/10' :
                  project.color === 'accent-purple' ? 'bg-accent-purple/10' :
                  'bg-accent-green/10'
                }`}>
                  <project.icon className={`w-8 h-8 ${
                    project.color === 'accent-orange' ? 'text-accent-orange' :
                    project.color === 'accent-cyan' ? 'text-accent-cyan' :
                    project.color === 'accent-purple' ? 'text-accent-purple' :
                    'text-accent-green'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                {/* Impact badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-aws-dark/80 border border-aws-border rounded-full mb-6">
                  <Zap className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-mono text-white">{project.impact}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-aws-dark/50 text-gray-400 rounded-full border border-aws-border"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-xs font-mono text-gray-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* View more indicator */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors">
                  <span className="text-sm">Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aws-dark/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-aws-gray border border-aws-border rounded-3xl p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-accent-cyan/10 rounded-2xl">
                  <activeProject.icon className="w-10 h-10 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{activeProject.title}</h3>
                  <p className="text-gray-400">{activeProject.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">{activeProject.longDescription}</p>

              {/* Architecture diagram */}
              <div className="mb-8">
                <h4 className="font-mono text-sm text-terminal-green mb-4">// architecture</h4>
                <div className="flex items-center justify-between p-6 bg-aws-dark/50 rounded-xl border border-aws-border">
                  {activeProject.architecture.map((item, index) => (
                    <div key={item.name} className="flex items-center">
                      <div className="text-center">
                        <div className="p-3 bg-aws-gray rounded-xl mb-2 mx-auto w-fit">
                          <item.icon className="w-6 h-6 text-accent-cyan" />
                        </div>
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      {index < activeProject.architecture.length - 1 && (
                        <ArrowRight className="w-6 h-6 text-accent-cyan mx-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-center justify-between p-6 bg-aws-dark/50 rounded-xl border border-aws-border">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Measured impact</p>
                  <p className="text-2xl font-display font-bold text-white">{activeProject.impact}</p>
                </div>
                <Zap className="w-12 h-12 text-yellow-500" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {activeProject.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-mono bg-aws-dark text-gray-300 rounded-full border border-aws-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
