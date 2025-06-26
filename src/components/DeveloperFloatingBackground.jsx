"use client"
import {
  Github,
  Code,
  Terminal,
  Braces,
  GitBranch,
  Database,
  Cpu,
  Zap,
  Coffee,
  Bug,
  Brackets,
  Hash,
  FileCode,
  Globe,
  Server,
} from "lucide-react"

const DeveloperFloatingBackground = () => {
  const symbols = [
    { Icon: Github, size: "w-5 h-5" },
    { Icon: Code, size: "w-6 h-6" },
    { Icon: Terminal, size: "w-5 h-5" },
    { Icon: Braces, size: "w-5 h-5" },
    { Icon: GitBranch, size: "w-6 h-6" },
    { Icon: Database, size: "w-6 h-6" },
    { Icon: Cpu, size: "w-5 h-5" },
    { Icon: Zap, size: "w-5 h-5" },
    { Icon: Coffee, size: "w-6 h-6" },
    { Icon: Bug, size: "w-5 h-5" },
    { Icon: Brackets, size: "w-6 h-6" },
    { Icon: Hash, size: "w-5 h-5" },
    { Icon: FileCode, size: "w-5 h-5" },
    { Icon: Globe, size: "w-6 h-6" },
    { Icon: Server, size: "w-6 h-6" },
  ]

  const generateFloatingSymbols = () => {
    const floatingSymbols = []
    const totalSymbols = 20
    const glowDuration = 6 // 6 seconds glow
    const gapDuration = 30 // 30 seconds gap between glows
    const totalCycleDuration = 720 // 12 minutes total cycle

    // Create two groups for alternating glows - ensures max 2 symbols glow at once
    for (let i = 0; i < totalSymbols; i++) {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
      const randomLeft = Math.random() * 100
      const randomTop = Math.random() * 100
      const floatDelay = Math.random() * 10
      const floatDuration = 15 + Math.random() * 20

      // Alternate between two groups with staggered timing
      const group = i % 2
      const symbolIndex = Math.floor(i / 2)

      // Group 0: starts immediately, Group 1: starts 18 seconds later
      const baseDelay = symbolIndex * (glowDuration + gapDuration)
      const groupOffset = group * 18 // 18 second offset between groups
      const glowDelay = baseDelay + groupOffset

      floatingSymbols.push(
        <div
          key={i}
          className="absolute text-white dev-symbol-glow"
          style={{
            left: `${randomLeft}%`,
            top: `${randomTop}%`,
            opacity: 0.07,
            animationDelay: `${glowDelay}s`,
            animationDuration: `${totalCycleDuration}s`,
            animationName: "smoothGlow",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        >
          <randomSymbol.Icon
            className={`${randomSymbol.size} dev-float`}
            style={{
              animationDelay: `${floatDelay}s`,
              animationDuration: `${floatDuration}s`,
              animationName: "float",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        </div>,
      )
    }

    return floatingSymbols
  }

  // Special symbols with alternating group timing
  const specialSymbolsData = [
    { content: "<>", position: "top-1/4 left-10", size: "text-4xl", group: 0, index: 10 },
    { content: "</>", position: "bottom-1/3 right-1/4", size: "text-3xl", group: 1, index: 10 },
    { content: "{", position: "top-1/2 left-1/4", size: "text-2xl", group: 0, index: 11 },
    { content: "}", position: "top-3/4 right-1/3", size: "text-2xl", group: 1, index: 11 },
    { content: "const dev = true;", position: "top-20 left-1/3", size: "text-xs", group: 0, index: 12 },
    { content: "npm install", position: "bottom-20 left-20", size: "text-xs", group: 1, index: 12 },
    { content: "git commit -m", position: "top-1/3 right-10", size: "text-xs", group: 0, index: 13 },
  ]

  const totalCycleDuration = 720 // 12 minutes total cycle

  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none -z-20">
      {/* React Symbol - First in sequence */}
      <div
        className="absolute top-10 right-20 text-white w-12 h-12 dev-symbol-glow"
        style={{
          opacity: 0.1,
          animationDelay: "0s",
          animationDuration: `${totalCycleDuration}s`,
          animationName: "smoothGlow",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            animationName: "spin",
            animationDuration: "30s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <div className="absolute inset-0 border-2 border-current rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-current rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-2 left-1/2 w-1 h-4 bg-current transform -translate-x-1/2 rotate-45"></div>
          <div className="absolute bottom-2 left-1/2 w-1 h-4 bg-current transform -translate-x-1/2 -rotate-45"></div>
          <div className="absolute top-1/2 left-2 w-4 h-1 bg-current transform -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 right-2 w-4 h-1 bg-current transform -translate-y-1/2 -rotate-45"></div>
        </div>
      </div>

      {/* Generated floating symbols */}
      {generateFloatingSymbols()}

      {/* Special symbols with alternating timing */}
      {specialSymbolsData.map((symbol, index) => {
        const glowDuration = 6
        const gapDuration = 30
        const baseDelay = symbol.index * (glowDuration + gapDuration)
        const groupOffset = symbol.group * 18 // 18 second offset between groups
        const finalDelay = baseDelay + groupOffset

        return (
          <div
            key={`special-${index}`}
            className={`absolute ${symbol.position} text-white ${symbol.size} font-mono dev-symbol-glow`}
            style={{
              opacity: 0.1,
              animationDelay: `${finalDelay}s`,
              animationDuration: `${totalCycleDuration}s`,
              animationName: "smoothGlow",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          >
            {symbol.content}
          </div>
        )
      })}
    </div>
  )
}

export default DeveloperFloatingBackground
