'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Globe, Zap, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: Cpu,
    title: 'Infrastructure',
    description: 'Understanding how systems work end-to-end, from networks to cloud infrastructure, with a focus on reliability and scalability.',
    color: 'accent-orange',
  },
  {
    icon: Globe,
    title: 'Cloud Foundations',
    description: 'Solid understanding of cloud fundamentals on AWS, including compute, networking, storage, and identity management.',
    color: 'accent-cyan',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Always looking to automate repetitive tasks and simplify processes to improve efficiency and reduce operational overhead.',
    color: 'accent-purple',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Curious by nature, I enjoy learning continuously, experimenting with new technologies, and keeping my skills up to date.',
    color: 'accent-green',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aws-dark via-aws-gray/20 to-aws-dark" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-terminal-green text-sm">// about</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Who am I<span className="text-white">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-lg">
                Hello! My name is <span className="text-white font-medium">Rayan Zouch</span>, I'm an engineering graduate from <span className="text-white font-medium">ECE Paris</span>, specialized in Information Systems and Cybersecurity.
              </p>

              <p className="text-lg">
                I'm deeply interested in <span className="text-white font-medium">IT infrastructure</span>, <span className="text-white font-medium">cloud technologies</span>, and how reliable systems support real-world operations. Through my experiences in cybersecurity and IT environments, I've learned the importance of building scalable, secure, and well-designed technical solutions.
              </p>

              <p className="text-lg">
                I'm a curious and motivated person who enjoys learning continuously, experimenting with new technologies, and improving my skills to stay up to date in a constantly evolving field.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '6', label: 'Months Amazon' },
                { value: '5', label: 'Months PwC' },
                { value: '2', label: 'AWS Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 gap-3"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex items-center gap-4 p-4 bg-aws-gray/50 backdrop-blur-sm border border-aws-border rounded-xl hover:border-white/50 transition-all card-shine"
              >
                <div className={`shrink-0 p-3 rounded-xl group-hover:scale-110 transition-transform ${
                  item.color === 'accent-orange' ? 'bg-accent-orange/10' :
                  item.color === 'accent-cyan' ? 'bg-accent-cyan/10' :
                  item.color === 'accent-purple' ? 'bg-accent-purple/10' :
                  'bg-accent-green/10'
                }`}>
                  <item.icon className={`w-5 h-5 ${
                    item.color === 'accent-orange' ? 'text-accent-orange' :
                    item.color === 'accent-cyan' ? 'text-accent-cyan' :
                    item.color === 'accent-purple' ? 'text-accent-purple' :
                    'text-accent-green'
                  }`} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
