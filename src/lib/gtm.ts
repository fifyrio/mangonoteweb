export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export const initGTM = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })
  }
}

export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(data)
  }
}

export const trackEvent = ({
  event,
  category,
  action,
  label,
  value
}: {
  event: string
  category?: string
  action?: string
  label?: string
  value?: number
}) => {
  pushToDataLayer({
    event,
    event_category: category,
    event_action: action,
    event_label: label,
    value
  })
}

export const trackPageView = (url: string, title?: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: url,
    page_title: title || document.title
  })
}