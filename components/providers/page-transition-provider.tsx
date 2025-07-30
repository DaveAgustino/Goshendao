"use client"

import { PageTransition } from "@/components/ui/page-transition"
import { usePageTransition } from "@/contexts/page-transition-context"
import type { ReactNode } from "react"

interface PageTransitionProviderProps {
  children: ReactNode
}

export function PageTransitionWrapper({ children }: PageTransitionProviderProps) {
  const { isLoading, loadingText } = usePageTransition()

  return (
    <>
      {children}
      <PageTransition isLoading={isLoading} loadingText={loadingText} />
    </>
  )
}
