"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface PageTransitionContextType {
  isLoading: boolean
  loadingText: string
  navigateWithTransition: (href: string, customLoadingText?: string) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("Loading...")
  const router = useRouter()

  const navigateWithTransition = useCallback(
    (href: string, customLoadingText?: string) => {
      if (customLoadingText) {
        setLoadingText(customLoadingText)
      }

      setIsLoading(true)

      // Faster loading time for better UX
      setTimeout(() => {
        router.push(href)

        // Hide loading after navigation
        setTimeout(() => {
          setIsLoading(false)
          setLoadingText("Loading...")
        }, 300) // Reduced from 500ms
      }, 800) // Reduced from 1500ms for faster loading
    },
    [router],
  )

  return (
    <PageTransitionContext.Provider
      value={{
        isLoading,
        loadingText,
        navigateWithTransition,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext)
  if (context === undefined) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider")
  }
  return context
}
