import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  trackPageView,
  trackButtonClick,
  trackLinkClick,
  trackFormSubmit,
  trackScrollDepth,
  trackError,
  trackCustomEvent,
  EventParams
} from '@/lib/analytics'

export const useAnalytics = () => {
  const router = useRouter()

  // Auto track page views
  useEffect(() => {
    const handleRouteChange = () => {
      trackPageView(window.location.pathname, document.title)
    }

    // Track initial page load
    trackPageView(window.location.pathname, document.title)

    // Note: In Next.js 13+ with app router, we'll need a different approach
    // This is a placeholder for route change detection
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  // Auto track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0
    const scrollDepthThresholds = [25, 50, 75, 90, 100]
    const trackedDepths = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent

        scrollDepthThresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !trackedDepths.has(threshold)) {
            trackedDepths.add(threshold)
            trackScrollDepth(threshold, window.location.pathname)
          }
        })
      }
    }

    const throttledHandleScroll = throttle(handleScroll, 500)
    window.addEventListener('scroll', throttledHandleScroll)

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Tracking functions
  const trackButton = useCallback((buttonName: string, location: string, params?: EventParams) => {
    trackButtonClick(buttonName, location, params)
  }, [])

  const trackLink = useCallback((url: string, text: string, isExternal?: boolean) => {
    trackLinkClick(url, text, isExternal)
  }, [])

  const trackForm = useCallback((formName: string, location: string, success?: boolean) => {
    trackFormSubmit(formName, location, success)
  }, [])

  const trackEvent = useCallback((eventName: string, eventData: Record<string, any>) => {
    trackCustomEvent(eventName, eventData)
  }, [])

  const trackErrorEvent = useCallback((error: Error, context?: string) => {
    trackError(
      error.message,
      context || window.location.pathname,
      'javascript'
    )
  }, [])

  return {
    trackButton,
    trackLink,
    trackForm,
    trackEvent,
    trackError: trackErrorEvent,
  }
}

// Auto-tracking components
export const useAutoTrackClicks = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button')!
        const buttonText = button.textContent?.trim() || 'Unknown Button'
        const buttonLocation = getElementLocation(button)
        trackButtonClick(buttonText, buttonLocation)
      }

      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target as HTMLAnchorElement : target.closest('a')!
        const linkText = link.textContent?.trim() || 'Unknown Link'
        const linkUrl = link.href
        const isExternal = !linkUrl.includes(window.location.hostname)
        trackLinkClick(linkUrl, linkText, isExternal)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

export const useAutoTrackForms = () => {
  useEffect(() => {
    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement
      if (form.tagName === 'FORM') {
        const formName = form.name || form.id || 'unnamed-form'
        const formLocation = getElementLocation(form)
        trackFormSubmit(formName, formLocation, true)
      }
    }

    document.addEventListener('submit', handleSubmit)
    return () => document.removeEventListener('submit', handleSubmit)
  }, [])
}

// Error boundary integration
export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError(
        event.message,
        window.location.pathname,
        'javascript'
      )
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(
        `Unhandled Promise Rejection: ${event.reason}`,
        window.location.pathname,
        'api'
      )
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])
}

// Utility functions
const getElementLocation = (element: HTMLElement): string => {
  const id = element.id
  const className = element.className
  const tagName = element.tagName.toLowerCase()
  
  if (id) return `#${id}`
  if (className) return `.${className.split(' ')[0]}`
  return tagName
}

const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  let lastExecTime = 0
  
  return function (this: any, ...args: any[]) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}