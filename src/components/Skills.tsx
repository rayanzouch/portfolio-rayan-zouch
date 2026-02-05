'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cloud, Server, Code, Shield, Globe, Award, Users } from 'lucide-react'

const skillCategories = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'accent-orange',
    skills: [
      { name: 'AWS', level: 90, certified: true },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Terraform', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Active Directory', level: 75 },
    ],
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: Globe,
    color: 'accent-cyan',
    skills: [
      { name: 'TCP/IP', level: 85 },
      { name: 'VLANs', level: 80 },
      { name: 'Firewalls', level: 80 },
      { name: 'VPN', level: 75 },
      { name: 'DNS/DHCP', level: 85 },
      { name: 'BGP/OSPF', level: 65 },
    ],
  },
  {
    id: 'programming',
    name: 'Programming & Tools',
    icon: Code,
    color: 'accent-purple',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'SQL', level: 75 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    color: 'accent-green',
    skills: [
      { name: 'Threat Intelligence', level: 80 },
      { name: 'IAM', level: 75 },
      { name: 'Network Security', level: 80 },
      { name: 'SIEM', level: 70 },
      { name: 'Incident Response', level: 70 },
    ],
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    icon: Users,
    color: 'accent-cyan',
    skills: [
      { name: 'Communication', level: 0 },
      { name: 'Customer-Facing Mindset', level: 0 },
      { name: 'Autonomy', level: 0 },
      { name: 'Adaptability', level: 0 },
      { name: 'Technical Storytelling', level: 0 },
    ],
  },
]

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    logo: '☁️',
    color: 'accent-orange',
  },
  {
    name: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    logo: '🏗️',
    color: 'accent-orange',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('cloud')

  const activeCategoryData = skillCategories.find(c => c.id === activeCategory)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aws-dark via-aws-gray/20 to-aws-dark" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-terminal-green text-sm">// skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills<span className="text-white">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category selector */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-3">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    activeCategory === category.id
                      ? 'bg-aws-gray border-white/50 shadow-lg shadow-white/5'
                      : 'bg-aws-gray/30 border-aws-border hover:border-aws-border/80'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeCategory === category.id
                      ? category.color === 'accent-orange' ? 'bg-accent-orange/20'
                        : category.color === 'accent-cyan' ? 'bg-accent-cyan/20'
                        : category.color === 'accent-purple' ? 'bg-accent-purple/20'
                        : 'bg-accent-green/20'
                      : 'bg-aws-dark/50'
                  }`}>
                    <category.icon className={`w-5 h-5 ${
                      activeCategory === category.id
                        ? category.color === 'accent-orange' ? 'text-accent-orange'
                          : category.color === 'accent-cyan' ? 'text-accent-cyan'
                          : category.color === 'accent-purple' ? 'text-accent-purple'
                          : 'text-accent-green'
                        : 'text-gray-500'
                    }`} />
                  </div>
                  <span className={`font-medium ${activeCategory === category.id ? 'text-white' : 'text-gray-400'}`}>
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-aws-gray/50 backdrop-blur-sm border border-aws-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                {activeCategoryData && (
                  <>
                    <div className={`p-3 rounded-xl ${
                      activeCategoryData.color === 'accent-orange' ? 'bg-accent-orange/10'
                        : activeCategoryData.color === 'accent-cyan' ? 'bg-accent-cyan/10'
                        : activeCategoryData.color === 'accent-purple' ? 'bg-accent-purple/10'
                        : 'bg-accent-green/10'
                    }`}>
                      <activeCategoryData.icon className={`w-6 h-6 ${
                        activeCategoryData.color === 'accent-orange' ? 'text-accent-orange'
                          : activeCategoryData.color === 'accent-cyan' ? 'text-accent-cyan'
                          : activeCategoryData.color === 'accent-purple' ? 'text-accent-purple'
                          : 'text-accent-green'
                      }`} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {activeCategoryData.name}
                    </h3>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {activeCategoryData?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-default bg-aws-dark/50 border-aws-border hover:border-gray-600"
                  >
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <h4 className="font-mono text-sm text-terminal-green mb-4">// certifications</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-5 bg-aws-gray/50 border border-aws-border rounded-xl hover:border-white/30 transition-all"
                  >
                    <div className="text-3xl">{cert.logo}</div>
                    <div>
                      <h5 className="font-semibold text-white text-sm">{cert.name}</h5>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                    <Award className="w-5 h-5 text-terminal-green ml-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h4 className="font-mono text-sm text-terminal-green mb-6">// languages</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'French', level: 'Native', code: 'fr' },
              { lang: 'English', level: 'C1', code: 'us' },
              { lang: 'Spanish', level: 'B2', code: 'es' },
            ].map((item, index) => (
              <motion.div
                key={item.lang}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-aws-gray/50 border border-aws-border rounded-full"
              >
                <img
                  src={`https://flagcdn.com/24x18/${item.code}.png`}
                  alt={item.lang}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span className="text-white font-medium">{item.lang}</span>
                <span className="text-xs text-white bg-aws-dark/80 border border-aws-border px-2 py-0.5 rounded-full">
                  {item.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
