"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: string[]
  className?: string
  cursorClassName?: string
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            // Word complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Deletion complete, move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetweenWords])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span>{currentText}</span>
      <span
        className={cn(
          "ml-1 w-0.5 h-8 inline-block transition-opacity duration-100",
          showCursor ? "opacity-100" : "opacity-0",
          cursorClassName || "bg-foreground",
        )}
      />
    </div>
  )
}
