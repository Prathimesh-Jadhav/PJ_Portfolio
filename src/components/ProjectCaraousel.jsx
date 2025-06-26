"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectCarousel = ({ children, autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = children.length

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3 // lg screens
      if (window.innerWidth >= 768) return 2 // md screens
      return 1 // sm screens
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate max index based on cards per view
  const maxIndex = Math.max(0, totalSlides - cardsPerView)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || maxIndex === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex > maxIndex ? 0 : nextIndex
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, maxIndex])

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  // Calculate transform percentage
  const transformPercentage = (currentIndex * 100) / cardsPerView

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out md:gap-2"
          style={{ transform: `translateX(-${transformPercentage}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / cardsPerView}%` }}>
              <div className="h-full">{child}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators - only show if there are multiple positions */}
      {maxIndex > 0 && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Cards counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Showing {Math.min(currentIndex + cardsPerView, totalSlides)} of {totalSlides} projects
      </div>

      {/* Responsive indicator */}
      <div className="text-center mt-2 text-xs text-gray-500">
        <span className="hidden lg:inline">3 cards per view</span>
        <span className="hidden md:inline lg:hidden">2 cards per view</span>
        <span className="inline md:hidden">1 card per view</span>
      </div>
    </div>
  )
}

export default ProjectCarousel
