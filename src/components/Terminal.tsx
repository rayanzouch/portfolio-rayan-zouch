'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion } from 'framer-motion'

interface HistoryLine {
  type: 'input' | 'output'
  content: string
}

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '',
    '  whoami       Who am I?',
    '  education    My education',
    '  status       Current status',
    '  skills       Technical skills',
    '  projects     Selected projects',
    '  contact      Get in touch',
    '  clear        Clear terminal',
  ],

  whoami: [
    '',
    '  Rayan Zouch',
    '  Graduate IT Engineer',
    '  Based in Paris, France',
    '',
  ],

  education: [
    '',
    '  ECE Paris (2020 – 2025)',
    "  Engineering Degree – Information Systems & Cybersecurity",
    '  Focus: Cloud Infrastructure & Security',
    '',
  ],

  status: [
    '',
    '  Looking for full-time opportunities',
    '  Target roles:',
    '    - IT Engineer',
    '    - Cloud Engineer',
    '    - Security Engineer',
    '',
  ],

  skills: [
  '',
  '  Cloud        AWS (EC2, S3, IAM)',
  '               Terraform, CloudFormation',
  '',
  '  Networking   TCP/IP, DNS, DHCP',
  '               Routing & Switching',
  '               VLANs, Subnetting',
  '',
  '  Security     Network Security Fundamentals',
  '               Firewalls & Access Control',
  '               IAM & Least Privilege',
  '               Security Best Practices',
  '',
  '  Dev          Python, C++',
  '  Systems      Linux',
  '',
  '  AI Tools     Generative AI Fundamentals',
  '               Prompt Engineering',
  '               AI-assisted Development',
  '',
  '  Certifications',
  '               AWS Cloud Practitioner',
  '               AWS Academy Cloud Architecting',
  '',
],

  projects: [
    '',
    '  AWS Printer Monitoring',
    '    - Serverless IoT solution for predictive maintenance',
    '    - Stack: IoT Core, Lambda, DynamoDB, CloudFront',
    '',
    '  AutoClipper',
    '    - Discord bot for Twitch → TikTok video automation',
    '    - Stack: Python, YOLO v8, MoviePy, AssemblyAI',
    '',
  ],

  contact: [
    '',
    '  Email      rayan.zouch12@gmail.com',
    '  Phone      +33 6 47 07 46 42',
    '  LinkedIn   linkedin.com/in/rayan-zouch',
    '  GitHub     github.com/rayanzouch',
    '',
    '  Feel free to reach out 🚀',
    '',
  ],
}

// Auto-play configuration
const COMMAND_SEQUENCE = ['whoami', 'education', 'status']
const INITIAL_DELAY = 1500    // 1.5s before first command
const COMMAND_DELAY = 1500    // 1.5s between commands
const TYPING_SPEED = 100      // 100ms per character

export default function Terminal() {
  const [history, setHistory] = useState<HistoryLine[]>([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [sequenceComplete, setSequenceComplete] = useState(false)
  const [showGhost, setShowGhost] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-execute command sequence on mount
  useEffect(() => {
    let isMounted = true
    let currentSequenceIndex = 0

    const typeCommand = (command: string): Promise<void> => {
      return new Promise((resolve) => {
        let charIndex = 0

        const typeInterval = setInterval(() => {
          if (!isMounted) {
            clearInterval(typeInterval)
            resolve()
            return
          }

          if (charIndex <= command.length) {
            setInput(command.slice(0, charIndex))
            charIndex++
          } else {
            clearInterval(typeInterval)
            resolve()
          }
        }, TYPING_SPEED)
      })
    }

    const executeCommand = (command: string) => {
      const output = COMMANDS[command] as string[]
      setHistory(prev => [
        ...prev,
        { type: 'input', content: command },
        ...output.map(line => ({ type: 'output' as const, content: line })),
      ])
      setInput('')
    }

    const runSequence = async () => {
      // Initial delay before starting
      await new Promise(resolve => setTimeout(resolve, INITIAL_DELAY))

      while (currentSequenceIndex < COMMAND_SEQUENCE.length && isMounted) {
        const command = COMMAND_SEQUENCE[currentSequenceIndex]

        // Type the command
        await typeCommand(command)

        // Small pause before executing
        await new Promise(resolve => setTimeout(resolve, 300))

        // Execute and show output
        if (isMounted) {
          executeCommand(command)
        }

        currentSequenceIndex++

        // Delay before next command (if not last)
        if (currentSequenceIndex < COMMAND_SEQUENCE.length && isMounted) {
          await new Promise(resolve => setTimeout(resolve, COMMAND_DELAY))
        }
      }

      // Sequence complete - enable user input
      if (isMounted) {
        setIsAutoPlaying(false)
        setSequenceComplete(true)
      }
    }

    runSequence()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const focusInput = () => {
    if (!isAutoPlaying) {
      inputRef.current?.focus()
    }
  }

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    const newHistory: HistoryLine[] = [
      ...history,
      { type: 'input', content: cmd },
    ]

    if (trimmedCmd === '') {
      setHistory(newHistory)
      return
    }

    // Hide ghost after first command
    setShowGhost(false)
    setCommandHistory(prev => [...prev, trimmedCmd])
    setHistoryIndex(-1)

    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    const response = COMMANDS[trimmedCmd]

    if (response) {
      const outputLines = Array.isArray(response) ? response : [response]
      outputLines.forEach(line => {
        newHistory.push({ type: 'output', content: line })
      })
    } else {
      newHistory.push({
        type: 'output',
        content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
      })
    }

    setHistory(newHistory)
  }

  // Tab autocompletion
  const getAutoComplete = (partial: string): string | null => {
    if (!partial) return null
    const commands = Object.keys(COMMANDS)
    const matches = commands.filter(cmd => cmd.startsWith(partial.toLowerCase()))
    return matches.length === 1 ? matches[0] : null
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isAutoPlaying) return

    if (e.key === 'Tab') {
      e.preventDefault()
      const completed = getAutoComplete(input)
      if (completed) {
        setInput(completed)
      }
    } else if (e.key === 'Enter') {
      processCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '')
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-terminal-bg rounded-xl overflow-hidden shadow-2xl border border-terminal-border">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-terminal-header border-b border-terminal-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-3 text-xs font-mono text-terminal-muted">rayan@portfolio ~ </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          onClick={focusInput}
          className="p-5 h-80 md:h-96 overflow-y-auto font-mono text-sm cursor-text"
        >
          {history.map((line, index) => (
            <div key={index} className={line.type === 'input' ? 'mt-3 first:mt-0' : ''}>
              {line.type === 'input' ? (
                <div className="flex">
                  <span className="text-accent-blue">rayan@portfolio</span>
                  <span className="text-terminal-muted mx-1">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-terminal-muted ml-1 mr-2">$</span>
                  <span className="text-terminal-green">{line.content}</span>
                </div>
              ) : (
                <div className="text-gray-400 whitespace-pre leading-relaxed">{line.content}</div>
              )}
            </div>
          ))}

          {/* Current input line */}
          <div className="flex items-center mt-3">
            <span className="text-accent-blue">rayan@portfolio</span>
            <span className="text-terminal-muted mx-1">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-terminal-muted ml-1 mr-2">$</span>
            <div className="relative flex items-center">
              {/* Ghost placeholder - disappears after first command */}
              {sequenceComplete && showGhost && !input && (
                <span className="absolute left-0 text-terminal-green/40 pointer-events-none">
                  help
                </span>
              )}
              <span className="text-terminal-green whitespace-pre">{input}</span>
              <motion.span
                className="w-2 h-5 bg-terminal-green ml-px"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => !isAutoPlaying && setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute opacity-0 w-0 h-0"
                spellCheck={false}
                autoFocus={!isAutoPlaying}
                readOnly={isAutoPlaying}
              />
            </div>
          </div>

        </div>
      </div>

      {sequenceComplete && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-3 text-center text-white/80 italic text-sm"
        >
          type help to start exploring
        </motion.div>
      )}

    </motion.div>
  )
}
