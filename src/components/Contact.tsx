'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rayan.zouch12@gmail.com',
    href: 'mailto:rayan.zouch12@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 6 47 07 46 42',
    href: 'tel:+33647074642',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'France',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aws-dark via-aws-gray/10 to-aws-dark" />

      <div className="relative max-w-2xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="font-mono text-terminal-green text-sm">// contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's work together<span className="text-white">.</span>
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="space-y-4 mb-8">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href || undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`flex items-center gap-4 p-5 bg-aws-gray/50 border border-aws-border rounded-xl ${
                item.href ? 'hover:border-white/50 cursor-pointer' : ''
              } transition-all group`}
            >
              <div className="p-3 bg-terminal-green/10 rounded-xl group-hover:bg-terminal-green/20 transition-colors">
                <item.icon className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
              {item.href && (
                <ArrowUpRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors" />
              )}
            </motion.a>
          ))}
        </div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="p-6 bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-green-400 font-medium">Available</span>
          </div>
          <p className="text-sm text-gray-500">
            Looking for full-time opportunities in France
          </p>
        </motion.div>
      </div>
    </section>
  )
}
