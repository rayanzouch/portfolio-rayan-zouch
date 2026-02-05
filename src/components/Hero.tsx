'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-3xl mx-auto px-6 py-24">
        {/* Terminal */}
        <Terminal />

        {/* Scroll indicator - appears after terminal sequence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
