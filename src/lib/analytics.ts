import { pushToDataLayer } from './gtm'

// Core event tracking functions
export interface EventParams {
  event_category?: string
  event_label?: string
  value?: number
  custom_data?: Record<string, any>
}

// Page events
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle || document.title,
    timestamp: Date.now()
  })
}

export const trackScrollDepth = (depth: number, pagePath: string) => {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_depth: depth,
    page_path: pagePath,
    timestamp: Date.now()
  })
}

// User interaction events
export const trackButtonClick = (buttonName: string, location: string, params?: EventParams) => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
    event_category: params?.event_category || 'engagement',
    event_label: params?.event_label,
    value: params?.value,
    timestamp: Date.now(),
    ...params?.custom_data
  })
}

export const trackLinkClick = (linkUrl: string, linkText: string, isExternal: boolean = false) => {
  pushToDataLayer({
    event: 'link_click',
    link_url: linkUrl,
    link_text: linkText,
    link_type: isExternal ? 'external' : 'internal',
    event_category: 'navigation',
    timestamp: Date.now()
  })
}

export const trackFormSubmit = (formName: string, formLocation: string, success: boolean = true) => {
  pushToDataLayer({
    event: 'form_submit',
    form_name: formName,
    form_location: formLocation,
    form_success: success,
    event_category: 'form_interaction',
    timestamp: Date.now()
  })
}

export const trackFormInteraction = (formName: string, fieldName: string, action: 'focus' | 'blur' | 'input') => {
  pushToDataLayer({
    event: 'form_interaction',
    form_name: formName,
    field_name: fieldName,
    interaction_type: action,
    event_category: 'form_engagement',
    timestamp: Date.now()
  })
}

// Business events
export const trackSignup = (method: string, userId?: string) => {
  pushToDataLayer({
    event: 'sign_up',
    signup_method: method,
    user_id: userId,
    event_category: 'conversion',
    timestamp: Date.now()
  })
}

export const trackLogin = (method: string, userId?: string) => {
  pushToDataLayer({
    event: 'login',
    login_method: method,
    user_id: userId,
    event_category: 'user_engagement',
    timestamp: Date.now()
  })
}

export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD', items?: any[]) => {
  pushToDataLayer({
    event: 'purchase',
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items || [],
    event_category: 'ecommerce',
    timestamp: Date.now()
  })
}

export const trackSubscription = (planName: string, value: number, currency: string = 'USD') => {
  pushToDataLayer({
    event: 'subscribe',
    subscription_plan: planName,
    value: value,
    currency: currency,
    event_category: 'conversion',
    timestamp: Date.now()
  })
}

// Content engagement events
export const trackVideoPlay = (videoTitle: string, videoUrl: string, duration?: number) => {
  pushToDataLayer({
    event: 'video_play',
    video_title: videoTitle,
    video_url: videoUrl,
    video_duration: duration,
    event_category: 'video_engagement',
    timestamp: Date.now()
  })
}

export const trackVideoComplete = (videoTitle: string, videoUrl: string, watchTime: number) => {
  pushToDataLayer({
    event: 'video_complete',
    video_title: videoTitle,
    video_url: videoUrl,
    watch_time: watchTime,
    event_category: 'video_engagement',
    timestamp: Date.now()
  })
}

export const trackFileDownload = (fileName: string, fileUrl: string, fileType: string) => {
  pushToDataLayer({
    event: 'file_download',
    file_name: fileName,
    file_url: fileUrl,
    file_type: fileType,
    event_category: 'content_engagement',
    timestamp: Date.now()
  })
}

export const trackSearch = (searchTerm: string, resultCount?: number) => {
  pushToDataLayer({
    event: 'search',
    search_term: searchTerm,
    search_results: resultCount,
    event_category: 'site_search',
    timestamp: Date.now()
  })
}

// Error tracking
export const trackError = (errorMessage: string, errorPage: string, errorType: 'javascript' | 'api' | 'form' = 'javascript') => {
  pushToDataLayer({
    event: 'error',
    error_message: errorMessage,
    error_page: errorPage,
    error_type: errorType,
    event_category: 'error',
    timestamp: Date.now()
  })
}

// Performance tracking
export const trackPageLoadTime = (loadTime: number, pagePath: string) => {
  pushToDataLayer({
    event: 'page_timing',
    timing_category: 'page_load',
    timing_value: loadTime,
    page_path: pagePath,
    event_category: 'performance',
    timestamp: Date.now()
  })
}

// Custom events
export const trackCustomEvent = (eventName: string, eventData: Record<string, any>) => {
  pushToDataLayer({
    event: eventName,
    event_category: 'custom',
    timestamp: Date.now(),
    ...eventData
  })
}