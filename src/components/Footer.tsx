'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-8 border-t border-aws-border">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rayan Zouch. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/rayanzouch', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rayan-zouch', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rayan.zouch12@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}

            <div className="w-px h-5 bg-aws-border" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
