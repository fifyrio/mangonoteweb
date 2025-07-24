'use client'

import { useEffect } from 'react'
import { useAnalytics, useAutoTrackClicks, useAutoTrackForms, useErrorTracking } from '@/hooks/useAnalytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
  enableAutoTracking?: boolean
  enableErrorTracking?: boolean
}

export default function AnalyticsProvider({ 
  children, 
  enableAutoTracking = true,
  enableErrorTracking = true 
}: AnalyticsProviderProps) {
  // Initialize analytics hooks
  useAnalytics()
  
  // Enable auto-tracking if specified
  if (enableAutoTracking) {
    useAutoTrackClicks()
    useAutoTrackForms()
  }
  
  // Enable error tracking if specified
  if (enableErrorTracking) {
    useErrorTracking()
  }

  return <>{children}</>
}