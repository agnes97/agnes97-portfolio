'use client'

import { useEffect } from 'react'

const VITALS_ORIGIN = 'https://vitals.vercel-insights.com'
const PROXY_PATH = '/_vitals'

export default function VitalsProxy() {
  useEffect(() => {
    const originalSendBeacon = navigator.sendBeacon.bind(navigator)

    navigator.sendBeacon = (url: string | URL, data?: BodyInit | null) => {
      const urlStr = url.toString()
      const proxied = urlStr.startsWith(VITALS_ORIGIN)
        ? urlStr.replace(VITALS_ORIGIN, PROXY_PATH)
        : urlStr
      return originalSendBeacon(proxied, data)
    }

    return () => {
      navigator.sendBeacon = originalSendBeacon
    }
  }, [])

  return null
}
